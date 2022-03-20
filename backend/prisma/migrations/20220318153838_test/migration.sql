/*
  Warnings:

  - You are about to drop the column `temprature` on the `Modulestate` table. All the data in the column will be lost.
  - Added the required column `noofdata` to the `Modulestatelog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Modulestate" DROP COLUMN "temprature",
ADD COLUMN     "typemax" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "typemins" INTEGER;

-- AlterTable
ALTER TABLE "Modulestatelog" ADD COLUMN     "noofdata" INTEGER NOT NULL;
