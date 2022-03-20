/*
  Warnings:

  - The primary key for the `Module` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Module` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Modulestate" DROP CONSTRAINT "Modulestate_moduleid_fkey";

-- AlterTable
ALTER TABLE "Module" DROP CONSTRAINT "Module_pkey",
DROP COLUMN "id",
ADD COLUMN     "moduleid" SERIAL NOT NULL,
ADD CONSTRAINT "Module_pkey" PRIMARY KEY ("moduleid");

-- AddForeignKey
ALTER TABLE "Modulestate" ADD CONSTRAINT "Modulestate_moduleid_fkey" FOREIGN KEY ("moduleid") REFERENCES "Module"("moduleid") ON DELETE CASCADE ON UPDATE CASCADE;
