/*
  Warnings:

  - You are about to drop the `Modulestatelog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Modulestatelog" DROP CONSTRAINT "Modulestatelog_modulestateid_fkey";

-- DropTable
DROP TABLE "Modulestatelog";

-- CreateTable
CREATE TABLE "Modulelog" (
    "logid" SERIAL NOT NULL,
    "modulestateid" INTEGER NOT NULL,
    "running_timestart" TIMESTAMP(3) NOT NULL,
    "running_timeend" TIMESTAMP(3),
    "noofdata" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createddate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Modulelog_pkey" PRIMARY KEY ("logid")
);

-- AddForeignKey
ALTER TABLE "Modulelog" ADD CONSTRAINT "Modulelog_modulestateid_fkey" FOREIGN KEY ("modulestateid") REFERENCES "Modulestate"("modulestateid") ON DELETE CASCADE ON UPDATE CASCADE;
