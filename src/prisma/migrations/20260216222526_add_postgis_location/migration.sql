-- CreateExtension (managed by Supabase – required for shadow DB compatibility)
CREATE EXTENSION IF NOT EXISTS "postgis";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "location" geography(Point, 4326);

-- CreateIndex (for fast spatial queries)
CREATE INDEX "User_location_idx" ON "User" USING GIST ("location");
