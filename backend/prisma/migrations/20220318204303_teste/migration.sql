/*
  Warnings:

  - The primary key for the `Modulestate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Modulestate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Modulestatelog" DROP CONSTRAINT "Modulestatelog_modulestateid_fkey";

-- AlterTable
ALTER TABLE "Modulestate" DROP CONSTRAINT "Modulestate_pkey",
DROP COLUMN "id",
ADD COLUMN     "modulestateid" SERIAL NOT NULL,
ADD CONSTRAINT "Modulestate_pkey" PRIMARY KEY ("modulestateid");

-- AddForeignKey
ALTER TABLE "Modulestatelog" ADD CONSTRAINT "Modulestatelog_modulestateid_fkey" FOREIGN KEY ("modulestateid") REFERENCES "Modulestate"("modulestateid") ON DELETE CASCADE ON UPDATE CASCADE;
