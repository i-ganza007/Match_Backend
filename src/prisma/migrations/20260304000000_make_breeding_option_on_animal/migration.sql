-- AlterTable: make breedingEventId optional on Animal
ALTER TABLE "Animal" DROP CONSTRAINT IF EXISTS "Animal_breedingEventId_fkey";
ALTER TABLE "Animal" ALTER COLUMN "breedingEventId" DROP NOT NULL;

-- Re-add FK with SET NULL for optional relation
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_breedingEventId_fkey"
  FOREIGN KEY ("breedingEventId") REFERENCES "Breeding"("breedingId")
  ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable: update profile_url default to full URL
ALTER TABLE "User" ALTER COLUMN "profile_url"
  SET DEFAULT 'https://hzihqpbtzfseejihukvk.supabase.co/storage/v1/object/public/Animal_Images/avatar.jpg';
