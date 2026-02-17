-- DropIndex
DROP INDEX "User_location_idx";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile_url" TEXT;
