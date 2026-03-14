/**
 * seed_animals.ts
 *
 * Seeds 7 animals per user using labeled training images from the local Data/ folder.
 * Each breed maps to the exact training data directory, so MobileNetV2 extracts
 * meaningful, varied feature vectors → recommendation scores differ per animal.
 *
 * Run: npx ts-node -r tsconfig-paths/register src/prisma/seed_animals.ts
 */

import { PrismaClient, AnimalType, AnimalSpecies, Gender, AnimalStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Pool } from 'pg';
import { randomUUID } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

// ── Clients ───────────────────────────────────────────────────────────────────

const pgPool   = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter  = new PrismaPg(pgPool);
const prisma   = new PrismaClient({ adapter });
const supabase: SupabaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SERVICE_ROLE!,
);

const BUCKET    = 'Animal_Images';
const DATA_DIR  = path.join(__dirname, '..', '..', '..', 'Data');
const DEFAULT_PHOTO = `https://hzihqpbtzfseejihukvk.supabase.co/storage/v1/object/public/${BUCKET}/avatar.jpg`;

// ── User IDs ──────────────────────────────────────────────────────────────────

const USER_IDS = [
  '94f14aab-c894-4a6a-aec8-5e035550a3d7',
  '3409c848-589a-4a61-a7dc-dcebb707a107',
  '7e11ccd0-1866-46a0-a929-9d494961f041',
  'e1e928ad-fd54-4b5c-8f5f-0bfd10f2806c',
  '154721e6-cb01-4aba-ae14-9d853cb41530',
  '7cab687e-1a0c-406e-94ad-c366ea5fe67f',
  'ad67f697-d290-47bf-8e9a-668dc1e1aefe',
  '20291b7f-b277-4a84-a86b-16a47f1fc239',
  '5929cdb9-73aa-456f-b9c5-dec1dd0c303e',
  '86b2eb94-7933-442e-a8ae-869452b88fc3',
];

// ── 7 species slots ───────────────────────────────────────────────────────────
// Sex alternates as checkerboard (userIndex + slotIndex) % 2
// → every breed has both MALE and FEMALE across owners → recommendation pairs guaranteed

const SLOTS = [
  { specie: AnimalSpecies.FREISIAN_COW,         type: AnimalType.COW,   birthMonthsAgo: 24, breed_confidence: 0.94, dataFolder: 'fresian_cow'          },
  { specie: AnimalSpecies.INDIGENOUS_ANKOLE_COW, type: AnimalType.COW,   birthMonthsAgo: 28, breed_confidence: 0.91, dataFolder: 'indigenous_ankole_cow' },
  { specie: AnimalSpecies.MERINO_SHEEP,          type: AnimalType.SHEEP, birthMonthsAgo: 14, breed_confidence: 0.86, dataFolder: 'merino_sheep'          },
  { specie: AnimalSpecies.DORPER_SHEEP,          type: AnimalType.SHEEP, birthMonthsAgo: 16, breed_confidence: 0.88, dataFolder: 'dorper_sheep'          },
  { specie: AnimalSpecies.LANDRACE_PIG,          type: AnimalType.PIG,   birthMonthsAgo: 12, breed_confidence: 0.84, dataFolder: 'landrace_pig'          },
  { specie: AnimalSpecies.DUROC_PIG,             type: AnimalType.PIG,   birthMonthsAgo: 13, breed_confidence: 0.87, dataFolder: 'duroc_pig'            },
  { specie: AnimalSpecies.INDIGENOUS_GOAT,       type: AnimalType.GOAT,  birthMonthsAgo: 15, breed_confidence: 0.80, dataFolder: 'indigenous_goat'      },
] as const;

// ── Animal names — 10 per slot (Kinyarwanda) ─────────────────────────────────

const NAMES: string[][] = [
  ['Isuku',    'Inyange',    'Amata',     'Inzovu',    'Rugira',    'Gasabo',     'Inka',      'Umwami',    'Ibwana',    'Remera'    ], // Freisian
  ['Akarabo',  'Kimisagara', 'Kiramuruzi','Gahanga',   'Nyagatare', 'Munyaga',    'Rukiri',    'Biryogo',   'Cyangugu',  'Nyamirambo'], // Ankole
  ['Intama',   'Urukundo',   'Agahire',   'Inkorwa',   'Kanombe',   'Kabagari',   'Gitarama',  'Rugarama',  'Gisagara',  'Kamonyi'   ], // Merino
  ['Inshuti',  'Inkona',     'Impinga',   'Sovu',      'Nyamyumba', 'Musha',      'Muhanga',   'Rusizi',    'Gahengeri', 'Nyarugenge'], // Dorper
  ['Inzuki',   'Ubwiza',     'Ingurube',  'Ngoma',     'Rwaza',     'Kinigi',     'Gisenyi',   'Kicukiro',  'Rwamagana', 'Rwimiyaga' ], // Landrace
  ['Impongo',  'Inzira',     'Umutima',   'Kamembe',   'Buhimba',   'Huye',       'Rubavu',    'Musanze',   'Mururu',    'Karangazi' ], // Duroc
  ['Impene',   'Ihene',      'Rugeyo',    'Gasura',    'Rurama',    'Mushishiro', 'Inzizi',    'Rugabo',    'Museke',    'Nyaruzuzu' ], // Goat
];

// ── Read N unique image files from a local Data subfolder ────────────────────

function readLocalImages(folderName: string, needed: number): string[] {
  const dir = path.join(DATA_DIR, folderName);
  const files = fs.readdirSync(dir)
    .filter(f => /\.(jpe?g|png)$/i.test(f))
    .sort();                          // deterministic order
  if (files.length < needed) {
    console.warn(`  ⚠  ${folderName} has only ${files.length} images (need ${needed})`);
  }
  return files.slice(0, needed).map(f => path.join(dir, f));
}

// ── Upload a local file to Supabase, return public URL ───────────────────────

async function uploadLocalFile(filePath: string, label: string): Promise<string | null> {
  try {
    const buffer      = fs.readFileSync(filePath);
    const ext         = path.extname(filePath).slice(1) || 'jpg';
    const contentType = ext === 'png' ? 'image/png' : 'image/jpeg';
    const filename    = `seed_${label}_${randomUUID()}.${ext}`;

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(filename, buffer, { contentType, upsert: false });

    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(filename);
    return data.publicUrl;
  } catch (e) {
    console.warn(`    upload failed: ${e.message}`);
    return null;
  }
}

// ── Build pool: upload N images for a breed, return Supabase URLs ─────────────

async function buildImagePool(specie: AnimalSpecies, folderName: string, needed: number): Promise<string[]> {
  console.log(`  ${specie} ← Data/${folderName}`);
  const localFiles = readLocalImages(folderName, needed);
  const pool: string[] = [];

  for (const filePath of localFiles) {
    const url = await uploadLocalFile(filePath, specie);
    if (url) {
      pool.push(url);
      process.stdout.write(`    ${pool.length}/${needed}\r`);
    }
  }

  console.log(`    uploaded ${pool.length}/${needed}          `);

  // Pad with DEFAULT_PHOTO if folder didn't have enough images
  while (pool.length < needed) pool.push(DEFAULT_PHOTO);
  return pool;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const dob = (monthsAgo: number) => {
  const d = new Date();
  d.setMonth(d.getMonth() - monthsAgo);
  return d;
};

const sexFor = (u: number, s: number): Gender =>
  (u + s) % 2 === 0 ? Gender.MALE : Gender.FEMALE;

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const needed = USER_IDS.length; // one unique image per user per breed
  console.log(`Building image pools from local Data/ (${needed} images per breed)...\n`);

  const imagePools = new Map<AnimalSpecies, string[]>();
  for (const slot of SLOTS) {
    imagePools.set(slot.specie, await buildImagePool(slot.specie, slot.dataFolder, needed));
  }

  console.log('\nCreating / updating animal records...\n');
  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (let u = 0; u < USER_IDS.length; u++) {
    const ownerId = USER_IDS[u];
    console.log(`User ${u + 1}  (${ownerId.slice(0, 8)}...):`);

    for (let s = 0; s < SLOTS.length; s++) {
      const slot  = SLOTS[s];
      const name  = NAMES[s][u];
      const photo = imagePools.get(slot.specie)![u];

      const existing = await prisma.animal.findFirst({ where: { name, ownerId } });

      if (existing) {
        if (existing.profilePhoto !== photo) {
          await prisma.animal.update({
            where: { animalId: existing.animalId },
            data:  { profilePhoto: photo, specie: slot.specie },
          });
          console.log(`  ~  ${name.padEnd(14)} photo updated`);
          updated++;
        } else {
          console.log(`  =  ${name.padEnd(14)} already up to date`);
          skipped++;
        }
        continue;
      }

      await prisma.animal.create({
        data: {
          name,
          sex:              sexFor(u, s),
          type:             slot.type,
          specie:           slot.specie,
          birthDate:        dob(slot.birthMonthsAgo),
          status:           AnimalStatus.ALIVE,
          recommendable:    true,
          breed_confidence: slot.breed_confidence,
          profilePhoto:     photo,
          ownerId,
        },
      });

      console.log(`  +  ${name.padEnd(14)} ${slot.specie.padEnd(26)} ${sexFor(u, s)}`);
      created++;
    }
  }

  console.log(`\nDone — ${created} created, ${updated} photo-updated, ${skipped} skipped.`);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pgPool.end(); });
