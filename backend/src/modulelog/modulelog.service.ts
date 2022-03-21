import { Injectable } from '@nestjs/common';
import { CreateModulelogDto } from './dto/create-modulelog.dto';
import { UpdateModulelogDto } from './dto/update-modulelog.dto';
import {Prisma  } from '@prisma/client';
import {PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class ModulelogService {

  constructor(private prismaService: PrismaService){ }

 

  async  create(createModulelogDto: CreateModulelogDto) {
    console.log(createModulelogDto);
     const insert= await this.prismaService.modulelog.create({ data: createModulelogDto});
     return insert ;
  }

 async findAll() {
    return  this.prismaService.modulelog.findMany();
  
  }

  async findMany(id: number) {
 
 
  
     // return this.prismaService.module.findUnique({ where: {moduleid: id}});
  
  return this.prismaService.modulelog.findMany({ where: { modulestateid: id } });
  }

  update(id: number, updateModulelogDto: UpdateModulelogDto) {
    return `This action updates a #${id} modulelog`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulelog`;
  }
}
