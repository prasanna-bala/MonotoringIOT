/*
  Warnings:

  - You are about to drop the column `name` on the `Module` table. All the data in the column will be lost.
  - Added the required column `modulename` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Module" DROP COLUMN "name",
ADD COLUMN     "modulename" TEXT NOT NULL;
