import { Injectable, Module } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import {Prisma  } from '@prisma/client';
import {PrismaService} from 'src/prisma/prisma.service';


@Injectable()
export class ModuleService {

  constructor(private prismaService: PrismaService){ }

  
 async  create(createModuleDto: CreateModuleDto) {
    const insert= await this.prismaService.module.create({ data: createModuleDto});
    return insert ;
  }
 
  async findAll() {
     // return this.prismaService.module.findMany();  
      return this.prismaService.$queryRaw 
      `SELECT a.moduleid, description,modstatus,
      b.modulename as name ,type, 
      schedule_timestart,
      schedule_timeend, 
      operating_condition,  
      typemax, 
      typemins, 
      modulestateid
    FROM public."Modulestate" a
    inner join public."Module" b
    on a.moduleid = b.moduleid`;


  }

  async findOne(id: number) {
    return this.prismaService.module.findUnique({ where: {moduleid: id}});
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    const Update= await this.prismaService.module.update({ data: updateModuleDto ,where: { moduleid: id}});
    return Update ;
  }

  async remove(id: number) {
    return this.prismaService.module.delete({ where: { moduleid: id}});
  }
}
