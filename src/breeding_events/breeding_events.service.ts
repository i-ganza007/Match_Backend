import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma-service';

const ANIMAL_SELECT = {
    animalId:      true,
    name:          true,
    sex:           true,
    type:          true,
    specie:        true,
    profilePhoto:  true,
    recommendable: true,
} as const;

@Injectable()
export class BreedingEventsService {
    constructor(private prisma: PrismaService) {}

    async getMyBreedings(userId: string) {
        // Active = calving_date is null (outcome not yet recorded)
        const breedings = await this.prisma.breeding.findMany({
            where: {
                calving_date: null,
                OR: [
                    { father: { ownerId: userId } },
                    { mother: { ownerId: userId } },
                ],
            },
            include: {
                father: { select: ANIMAL_SELECT },
                mother: { select: ANIMAL_SELECT },
            },
            orderBy: { createdAt: 'desc' },
        });

        return breedings.map(b => ({
            breedingId:     b.breedingId,
            status:         'ACTIVE',
            createdAt:      b.createdAt,
            maleAnimalId:   b.fatherId,
            femaleAnimalId: b.motherId,
            maleAnimal:     b.father,
            femaleAnimal:   b.mother,
        }));
    }
}
