import { Injectable } from '@nestjs/common';
import { AnimalType, Gender, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { Animals as AnimalDTO } from '../lib/animal.dto';
import { StorageService } from '../storage/storage.service';

const BREEDING_AGE: Record<string, { female: { min: number; max: number }; male: { min: number; max: number } }> = {
    COW:   { female: { min: 15, max: 18 }, male: { min: 12, max: 15 } },
    PIG:   { female: { min: 7,  max: 8  }, male: { min: 8,  max: 10 } },
    SHEEP: { female: { min: 10, max: 12 }, male: { min: 5,  max: 7  } },
    GOAT:  { female: { min: 10, max: 12 }, male: { min: 6,  max: 8  } },
};

@Injectable()
export class Animals {
    constructor(
        private prismaService: PrismaService,
        private storageService: StorageService,
    ) {}

    private calculateRecommendable(type: AnimalType, sex: Gender, birthDate?: Date): boolean {
        if (!birthDate) return true;
        const ageMonths = (Date.now() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 30.44);
        const thresholds = BREEDING_AGE[type][sex === Gender.FEMALE ? 'female' : 'male'];
        return ageMonths >= thresholds.min;
    }

    async getAllAnimals(){
        return await this.prismaService.animals.findMany()
    }

    async getSingleAnimal(id:string){
        return await this.prismaService.animals.findUnique({where:{animalId:id}})
    }

    async createAnimal(body: AnimalDTO, ownerId: string, file?: Express.Multer.File) {
        let profilePhoto = body.profilePhoto;

        if (file) {
            profilePhoto = await this.storageService.uploadAnimalPhoto(file);
        }

        const data: Prisma.AnimalUncheckedCreateInput = {
            name: body.name,
            sex: body.sex,
            birthDate: body.birthDate,
            type: body.type,
            profilePhoto,
            status: body.status,
            motherId: body.motherId,
            fatherId: body.fatherId,
            ownerId,
            specie: body.specie,
            breed_confidence: body.breed_confidence,
            recommendable: this.calculateRecommendable(body.type, body.sex, body.birthDate),
            breedingEventId: body.breedingEventId ?? null,
        };
        return await this.prismaService.animals.create({ data });
    }

    async deleteAnimal(id:string){
        return await this.prismaService.animals.delete({where:{animalId:id}})
    }

    async updateAnimals(id: string, body: Partial<AnimalDTO>) {
        return await this.prismaService.animals.update({ where: { animalId: id }, data: body as Prisma.AnimalUncheckedUpdateInput });
    }

    async uploadProfilePhoto(id: string, file: Express.Multer.File) {
        const publicUrl = await this.storageService.uploadAnimalPhoto(file);
        return await this.prismaService.animals.update({
            where: { animalId: id },
            data: { profilePhoto: publicUrl },
        });
    }
}
