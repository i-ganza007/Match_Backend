import { IsString, IsNumber, IsDate, IsOptional, IsEnum } from "class-validator";
import { Type, Transform } from "class-transformer";
import { Gender, AnimalType, AnimalStatus, AnimalSpecies } from "@prisma/client";

export class Animals {
    @IsString()
    name: string;

    @IsEnum(Gender)
    sex: Gender;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    birthDate?: Date;

    @IsEnum(AnimalType)
    type: AnimalType;

    // Populated from uploaded file — not required in the request body
    @IsOptional()
    @IsString()
    profilePhoto?: string;

    @IsEnum(AnimalStatus)
    status: AnimalStatus;

    @IsOptional()
    @IsString()
    motherId?: string;

    @IsOptional()
    @IsString()
    fatherId?: string;

    @IsEnum(AnimalSpecies)
    specie: AnimalSpecies;

    // Multipart sends numbers as strings — coerce before validation
    @Transform(({ value }) => parseFloat(value))
    @IsNumber()
    breed_confidence: number;

    @IsOptional()
    @IsString()
    breedingEventId?: string;
}
