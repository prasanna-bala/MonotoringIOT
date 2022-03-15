-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createddate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddate" TIMESTAMP(3),

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modulestate" (
    "id" SERIAL NOT NULL,
    "moduleid" INTEGER NOT NULL,
    "temprature" INTEGER NOT NULL DEFAULT 0,
    "schedule_timestart" TIMESTAMP(3) NOT NULL,
    "schedule_timeend" TIMESTAMP(3) NOT NULL,
    "operating_condition" BOOLEAN NOT NULL DEFAULT true,
    "createddate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateddate" TIMESTAMP(3),

    CONSTRAINT "Modulestate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modulestatelog" (
    "id" SERIAL NOT NULL,
    "modulestateid" INTEGER NOT NULL,
    "running_timestart" TIMESTAMP(3) NOT NULL,
    "running_timeend" TIMESTAMP(3) NOT NULL,
    "operating_condition" BOOLEAN NOT NULL DEFAULT true,
    "createddate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Modulestatelog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Modulestate" ADD CONSTRAINT "Modulestate_moduleid_fkey" FOREIGN KEY ("moduleid") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modulestatelog" ADD CONSTRAINT "Modulestatelog_modulestateid_fkey" FOREIGN KEY ("modulestateid") REFERENCES "Modulestate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
