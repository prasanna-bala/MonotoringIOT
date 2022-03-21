import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';

import { PrismaModule } from './prisma/prisma.module';
import { ModuleModule } from './module/module.module';
import { ModulelogModule } from './modulelog/modulelog.module';

@Module({
  imports: [DashboardModule,  PrismaModule, ModuleModule, ModulelogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
