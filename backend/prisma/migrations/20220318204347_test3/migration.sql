/*
  Warnings:

  - The primary key for the `Modulestatelog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Modulestatelog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Modulestatelog" DROP CONSTRAINT "Modulestatelog_pkey",
DROP COLUMN "id",
ADD COLUMN     "logid" SERIAL NOT NULL,
ADD CONSTRAINT "Modulestatelog_pkey" PRIMARY KEY ("logid");
