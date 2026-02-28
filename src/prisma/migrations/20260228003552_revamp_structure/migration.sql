/*
  Warnings:

  - You are about to drop the column `farmingSystem` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Animal" ALTER COLUMN "birthDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Perfomance_Records" ALTER COLUMN "milk_yield" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "farmingSystem";
