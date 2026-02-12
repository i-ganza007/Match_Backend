-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "AnimalSpecies" AS ENUM ('HOLSTEIN_COW', 'FREISIAN_COW', 'ANKOLE_COW', 'BROWN_SWISS_COW', 'GIROLANDO_COW', 'JERSEY_COW', 'LARGE_WHITE_PIG', 'DUROC_PIG', 'MERINO_SHEEP', 'LOCAL_GOAT');

-- CreateEnum
CREATE TYPE "AnimalType" AS ENUM ('COW', 'GOAT', 'PIG', 'SHEEP');

-- CreateEnum
CREATE TYPE "BreedingMethod" AS ENUM ('NATURAL', 'ARTIFICIAL_INSEMINATION', 'EMBRYO_TRANSFER', 'OTHER');

-- CreateEnum
CREATE TYPE "AnimalHealth" AS ENUM ('HEALTHY', 'SICK', 'RECOVERING');

-- CreateEnum
CREATE TYPE "AnimalStatus" AS ENUM ('ALIVE', 'DECEASED', 'SOLD', 'PREGNANT', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sex" "Gender" NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActive" TIMESTAMP(3) NOT NULL,
    "farmingSystem" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Animal" (
    "animalId" TEXT NOT NULL,
    "name" TEXT DEFAULT '',
    "sex" "Gender" NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "type" "AnimalType" NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilePhoto" TEXT NOT NULL DEFAULT '',
    "additionalPhotos" JSONB[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "AnimalStatus" NOT NULL DEFAULT 'ALIVE',
    "motherId" TEXT,
    "fatherId" TEXT,
    "ownerId" TEXT NOT NULL,
    "specie" "AnimalSpecies" NOT NULL,
    "breed_confidence" DOUBLE PRECISION NOT NULL,
    "breedingEventId" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("animalId")
);

-- CreateTable
CREATE TABLE "Breeding" (
    "breedingId" TEXT NOT NULL,
    "motherId" TEXT NOT NULL,
    "fatherId" TEXT NOT NULL,
    "breedingDate" TIMESTAMP(3) NOT NULL,
    "method" "BreedingMethod" NOT NULL,
    "expectedCalvingDate" TIMESTAMP(3),
    "calving_date" TIMESTAMP(3),
    "userRating" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Breeding_pkey" PRIMARY KEY ("breedingId")
);

-- CreateTable
CREATE TABLE "Breeding_Rec" (
    "breedingRecId" TEXT NOT NULL,
    "animalInitial" TEXT NOT NULL,
    "recommendedAnimalId" TEXT NOT NULL,
    "overall_score" DOUBLE PRECISION NOT NULL,
    "user_accepted" BOOLEAN NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userFeedback" TEXT DEFAULT '',
    "genetic_diversity_score" DOUBLE PRECISION NOT NULL,
    "inbreeding_risk_score" DOUBLE PRECISION NOT NULL,
    "breed_composition_match_score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Breeding_Rec_pkey" PRIMARY KEY ("breedingRecId")
);

-- CreateTable
CREATE TABLE "RelatedNess_Estimates" (
    "id" TEXT NOT NULL,
    "animal1" TEXT NOT NULL,
    "animal2" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "relatedness_prob" DOUBLE PRECISION NOT NULL,
    "pedigree_coeff" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RelatedNess_Estimates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perfomance_Records" (
    "id" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "milk_yield" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "health_status" "AnimalHealth" NOT NULL DEFAULT 'HEALTHY',
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Perfomance_Records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BreedingToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BreedingToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_BreedingToUser_B_index" ON "_BreedingToUser"("B");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_motherId_fkey" FOREIGN KEY ("motherId") REFERENCES "Animal"("animalId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "Animal"("animalId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_breedingEventId_fkey" FOREIGN KEY ("breedingEventId") REFERENCES "Breeding"("breedingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breeding" ADD CONSTRAINT "Breeding_motherId_fkey" FOREIGN KEY ("motherId") REFERENCES "Animal"("animalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breeding" ADD CONSTRAINT "Breeding_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "Animal"("animalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breeding_Rec" ADD CONSTRAINT "Breeding_Rec_animalInitial_fkey" FOREIGN KEY ("animalInitial") REFERENCES "Animal"("animalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breeding_Rec" ADD CONSTRAINT "Breeding_Rec_recommendedAnimalId_fkey" FOREIGN KEY ("recommendedAnimalId") REFERENCES "Animal"("animalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedNess_Estimates" ADD CONSTRAINT "RelatedNess_Estimates_animal1_fkey" FOREIGN KEY ("animal1") REFERENCES "Animal"("animalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RelatedNess_Estimates" ADD CONSTRAINT "RelatedNess_Estimates_animal2_fkey" FOREIGN KEY ("animal2") REFERENCES "Animal"("animalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perfomance_Records" ADD CONSTRAINT "Perfomance_Records_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("animalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BreedingToUser" ADD CONSTRAINT "_BreedingToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Breeding"("breedingId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BreedingToUser" ADD CONSTRAINT "_BreedingToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
