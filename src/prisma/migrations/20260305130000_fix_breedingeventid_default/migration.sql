-- Remove invalid empty-string default from breedingEventId FK column
ALTER TABLE "Animal" ALTER COLUMN "breedingEventId" DROP DEFAULT;
