/*
  Warnings:

  - You are about to drop the column `status` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `operating_condition` on the `Modulestatelog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Module" DROP COLUMN "status",
ADD COLUMN     "modstatus" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Modulestatelog" DROP COLUMN "operating_condition",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "running_timeend" DROP NOT NULL;
