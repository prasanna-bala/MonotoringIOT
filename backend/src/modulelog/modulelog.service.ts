import { Injectable } from '@nestjs/common';
import { CreateModulelogDto } from './dto/create-modulelog.dto';
import { UpdateModulelogDto } from './dto/update-modulelog.dto';
import {Prisma  } from '@prisma/client';
import {PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class ModulelogService {

  constructor(private prismaService: PrismaService){ }

  create(createModulelogDto: CreateModulelogDto) {
    return 'This action adds a new modulelog';
    console.log('helloWorld)');
  }

 async findAll() {
    return  this.prismaService.modulestatelog.findMany();
  
  }

  findMany(id: number) {
 
      return this.prismaService.$queryRaw 
      `SELECT*
    FROM public."Modulestatelog" a 
    where  a.modulestateid = ${id}`;
  
     // return this.prismaService.module.findUnique({ where: {moduleid: id}});
  
  //  return this.prismaService.modulestatelog.findMany({ where: { modulestateid: id } });
  }

  update(id: number, updateModulelogDto: UpdateModulelogDto) {
    return `This action updates a #${id} modulelog`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulelog`;
  }
}
