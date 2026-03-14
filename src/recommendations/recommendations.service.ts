import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { AnimalSpecies, AnimalStatus, Gender } from '@prisma/client';
import { spawn } from 'child_process';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as path from 'path';
import { PrismaService } from 'src/prisma-service/prisma-service';

// Maps AnimalSpecies enum values → Python model label strings (from CLASS_TO_TYPE in model_utils.py)
// Must match keys in CLASS_TO_TYPE inside recommend_breeding.py exactly
const SPECIES_LABEL: Record<AnimalSpecies, string> = {
  HOLSTEIN_COW:          'fresian_cow',
  FREISIAN_COW:          'fresian_cow',
  ANKOLE_COW:            'indigenous_ankole_cow',
  BROWN_SWISS_COW:       'brown_swiss_cow',
  GIROLANDO_COW:         'girolando_cow',
  JERSEY_COW:            'jersey_cow',
  SAHIWAL_COW:           'sahiwal_cow',
  LARGE_WHITE_PIG:       'large_white_pig',
  DUROC_PIG:             'duroc_pig',
  LANDRACE_PIG:          'landrace_pig',
  PIETRAIN_PIG:          'pietrain_pig',
  INDIGENOUS_PIG:        'indigenous_pig',
  MERINO_SHEEP:          'merino_sheep',
  DORPER_SHEEP:          'dorper_sheep',
  LOCAL_GOAT:            'indigenous_goat',
  INDIGENOUS_ANKOLE_COW: 'indigenous_ankole_cow',
  INDIGENOUS_GOAT:       'indigenous_goat',
};

interface MLScores {
    overall_score: number;
    genetic_diversity_score: number;
    inbreeding_risk_score: number;
    breed_composition_match_score: number;
}

interface ScoredCandidate extends MLScores {
    animalId: string;
}

@Injectable()
export class RecommendationsService {
    private readonly logger = new Logger(RecommendationsService.name);
    private readonly tmpDir = path.join(process.cwd(), 'tmp');
    private readonly mlScript = path.join(process.cwd(), 'ML_model', 'recommend_breeding.py');
    private readonly scoringConcurrency: number;

    constructor(private prisma: PrismaService) {
        const configuredConcurrency = Number(process.env.REC_SCORING_CONCURRENCY ?? 1);
        this.scoringConcurrency =
            Number.isFinite(configuredConcurrency) && configuredConcurrency > 0
                ? Math.floor(configuredConcurrency)
                : 1;

        if (!fs.existsSync(this.tmpDir)) fs.mkdirSync(this.tmpDir, { recursive: true });
        if (!fs.existsSync(this.mlScript)) {
            this.logger.error(`ML script not found at ${this.mlScript}`);
        }
    }

    // ── GET /recommendations?animalId= ──────────────────────────────────────

    async getRecommendations(animalId: string) {
        // Step 1: Fetch query animal — reject if not recommendable
        const animal = await this.prisma.animals.findUnique({ where: { animalId } });
        if (!animal) throw new NotFoundException('Animal not found');
        if (!animal.recommendable) throw new BadRequestException('Animal is not eligible for breeding recommendations');

        // Step 2: Serve cached results if fresh (< 7 days, ≥ 10 records)
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const cached = await this.prisma.breeding_rec.findMany({
            where: { animalInitial: animalId, generatedAt: { gte: sevenDaysAgo } },
            include: { recommendedAnimal: true },
            orderBy: { overall_score: 'desc' },
        });
        if (cached.length >= 10) return cached;

        // Step 3: Fetch candidates — opposite sex, same species type, different farm, alive, recommendable
        const oppositeSex = animal.sex === Gender.MALE ? Gender.FEMALE : Gender.MALE;
        const candidates = await this.prisma.animals.findMany({
            where: {
                type:          animal.type,
                sex:           oppositeSex,
                recommendable: true,
                status:        AnimalStatus.ALIVE,
                ownerId:       { not: animal.ownerId },
            },
        });
        this.logger.log(`Recommendation candidate pool for ${animalId}: ${candidates.length}`);
        if (candidates.length === 0) return [];

        // Step 4: Fetch relatedness scores involving this animal
        const relatednessRows = await this.prisma.relatedness_estimates.findMany({
            where: { OR: [{ animal1: animalId }, { animal2: animalId }] },
        });
        const relMap = new Map<string, number>();
        for (const r of relatednessRows) {
            const peer = r.animal1 === animalId ? r.animal2 : r.animal1;
            relMap.set(peer, r.pedigree_coeff);
        }

        // Step 5: Download query animal photo once
        const labelA    = SPECIES_LABEL[animal.specie] ?? 'fresian_cow';
        const queryImg  = path.join(this.tmpDir, `q_${animalId}_${Date.now()}.jpg`);
        await this.downloadImage(animal.profilePhoto, queryImg);

        // Step 6: Run ML scorer across all candidates in parallel
        const settled: PromiseSettledResult<ScoredCandidate | null>[] = [];
        for (let i = 0; i < candidates.length; i += this.scoringConcurrency) {
            const batch = candidates.slice(i, i + this.scoringConcurrency);
            const batchSettled = await Promise.allSettled(
                batch.map(c => this.scoreCandidate(queryImg, labelA, c, relMap)),
            );
            settled.push(...batchSettled);
        }
        fs.unlink(queryImg, () => {});

        const scored: ScoredCandidate[] = settled
            .filter((r): r is PromiseFulfilledResult<ScoredCandidate> =>
                r.status === 'fulfilled' && r.value !== null)
            .map(r => r.value);

        const failed = settled.length - scored.length;
        if (failed > 0) {
            this.logger.warn(`Scoring failures for ${animalId}: ${failed}/${settled.length}`);
        }
        this.logger.log(`Scored ${scored.length}/${settled.length} candidates (concurrency=${this.scoringConcurrency})`);

        if (scored.length === 0) return [];

        // Step 7: Rank by overall_score descending, keep top 10
        scored.sort((a, b) => b.overall_score - a.overall_score);
        const top10 = scored.slice(0, 10);

        // Step 8: Persist to Breeding_Rec and return with animal detail
        const beforeCreate = new Date();
        await this.prisma.breeding_rec.createMany({
            data: top10.map(r => ({
                animalInitial:                 animalId,
                recommendedAnimalId:           r.animalId,
                overall_score:                 r.overall_score,
                genetic_diversity_score:       r.genetic_diversity_score,
                inbreeding_risk_score:         r.inbreeding_risk_score,
                breed_composition_match_score: r.breed_composition_match_score,
                user_accepted:                 false,
            })),
        });

        return this.prisma.breeding_rec.findMany({
            where: { animalInitial: animalId, generatedAt: { gte: beforeCreate } },
            include: { recommendedAnimal: true },
            orderBy: { overall_score: 'desc' },
        });
    }

    // ── PATCH /recommendations/:breedingRecId/accept ────────────────────────

    async acceptRecommendation(breedingRecId: string) {
        const rec = await this.prisma.breeding_rec.findUnique({
            where: { breedingRecId },
            include: { originalAnimal: true },
        });
        if (!rec)             throw new NotFoundException('Recommendation not found');
        if (rec.user_accepted) throw new BadRequestException('Recommendation already accepted');
        if (rec.locked)        throw new BadRequestException('Recommendation is locked by an active breeding');

        const animalId    = rec.animalInitial;
        const candidateId = rec.recommendedAnimalId;
        const animal      = rec.originalAnimal;

        return this.prisma.client.$transaction(async tx => {
            // 1. Mark this rec as accepted
            await tx.breeding_Rec.update({
                where: { breedingRecId },
                data:  { user_accepted: true, acceptedAt: new Date() },
            });

            // 2. Create the Breeding record that will track the real outcome
            await tx.breeding.create({
                data: {
                    motherId:      animal.sex === Gender.FEMALE ? animalId : candidateId,
                    fatherId:      animal.sex === Gender.MALE   ? animalId : candidateId,
                    breedingRecId: breedingRecId,
                },
            });

            // 3. Lock all pending recs for this same pair (both directions)
            await tx.breeding_Rec.updateMany({
                where: {
                    OR: [
                        { animalInitial: animalId,    recommendedAnimalId: candidateId },
                        { animalInitial: candidateId, recommendedAnimalId: animalId    },
                    ],
                    user_accepted: false,
                    locked:        false,
                },
                data: { locked: true },
            });

            // 4. Mark both animals as temporarily unavailable
            await tx.animal.updateMany({
                where: { animalId: { in: [animalId, candidateId] } },
                data:  { recommendable: false },
            });

            return tx.breeding_Rec.findUnique({
                where:   { breedingRecId },
                include: { recommendedAnimal: true, breeding: true },
            });
        });
    }

    // ── PATCH /recommendations/:breedingRecId ────────────────────────────────

    async updateRecommendation(
        breedingRecId: string,
        body: { userFeedback?: string },
    ) {
        return this.prisma.breeding_rec.update({
            where: { breedingRecId },
            data: body,
        });
    }

    // ── Private helpers ──────────────────────────────────────────────────────

    private async scoreCandidate(
        queryImg: string,
        labelA: string,
        candidate: { animalId: string; profilePhoto: string; specie: AnimalSpecies },
        relMap: Map<string, number>,
    ): Promise<ScoredCandidate | null> {
        const candImg = path.join(this.tmpDir, `c_${candidate.animalId}_${Date.now()}.jpg`);
        try {
            await this.downloadImage(candidate.profilePhoto, candImg);
            const relatedness = relMap.get(candidate.animalId) ?? 0.0;
            const labelB      = SPECIES_LABEL[candidate.specie] ?? 'fresian_cow';
            const scores      = await this.runPython(queryImg, candImg, labelA, labelB, relatedness);
            return { animalId: candidate.animalId, ...scores };
        } catch (error) {
            const reason = error instanceof Error ? error.message : String(error);
            this.logger.warn(`Candidate ${candidate.animalId} scoring failed: ${reason}`);
            return null;
        } finally {
            fs.unlink(candImg, () => {});
        }
    }

    private downloadImage(url: string, dest: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const proto = url.startsWith('https') ? https : http;
            const file  = fs.createWriteStream(dest);
            proto.get(url, res => {
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(); });
            }).on('error', err => {
                fs.unlink(dest, () => {});
                reject(err);
            });
        });
    }

    private runPython(
        animalA: string,
        candidate: string,
        labelA: string,
        labelB: string,
        relatedness: number,
    ): Promise<MLScores> {
        return new Promise((resolve, reject) => {
            const py = spawn(process.env.PYTHON_BIN ?? 'python3', [
                this.mlScript,
                '--animalA',    animalA,
                '--animalB',    animalA,   // required by argparse but not used by the script
                '--candidate',  candidate,
                '--labelA',     labelA,
                '--labelB',     labelB,
                '--relatedness', String(relatedness),
            ]);

            let out = '';
            let err = '';
            py.stdout.on('data', (d: Buffer) => { out += d.toString(); });
            py.stderr.on('data', (d: Buffer) => { err += d.toString(); });
            py.on('close', code => {
                if (code !== 0) {
                    reject(new Error(`Python exited ${code}: ${err}`));
                    return;
                }
                try { resolve(JSON.parse(out)); }
                catch { reject(new Error(`Invalid JSON from Python: ${out}`)); }
            });
        });
    }
}
