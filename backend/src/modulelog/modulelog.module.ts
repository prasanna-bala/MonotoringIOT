import { Module } from '@nestjs/common';
import { ModulelogService } from './modulelog.service';
import { ModulelogController } from './modulelog.controller';

@Module({
  controllers: [ModulelogController],
  providers: [ModulelogService]
})
export class ModulelogModule {}
