import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulelogService } from './modulelog.service';
import { CreateModulelogDto } from './dto/create-modulelog.dto';
import { UpdateModulelogDto } from './dto/update-modulelog.dto';
import {PrismaService} from 'src/prisma/prisma.service';

@Controller('modulelog')
export class ModulelogController {
  constructor(private readonly modulelogService: ModulelogService) {}
  

  @Post()
  create(@Body() createModulelogDto: CreateModulelogDto) {
    return this.modulelogService.create(createModulelogDto);
  }

  @Get()
  findAll() {
    return this.modulelogService.findAll();
  }

  @Get(':id')
  findMany(@Param('id') id: string) {
    return this.modulelogService.findMany(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModulelogDto: UpdateModulelogDto) {
    return this.modulelogService.update(+id, updateModulelogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulelogService.remove(+id);
  }
}
