-- AlterTable: add litter_size and updatedAt to Perfomance_Records
ALTER TABLE "Perfomance_Records" ADD COLUMN IF NOT EXISTS "litter_size" INTEGER;
ALTER TABLE "Perfomance_Records" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT now();

-- AlterTable: add recommendable to Animal (required field, defaulting false for existing rows)
ALTER TABLE "Animal" ADD COLUMN IF NOT EXISTS "recommendable" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable: drop latitude/longitude from User (replaced by PostGIS geography column)
ALTER TABLE "User" DROP COLUMN IF EXISTS "latitude";
ALTER TABLE "User" DROP COLUMN IF EXISTS "longitude";
