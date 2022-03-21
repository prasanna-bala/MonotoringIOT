import { PartialType } from '@nestjs/swagger';
import { CreateModulelogDto } from './create-modulelog.dto';

export class UpdateModulelogDto extends PartialType(CreateModulelogDto) {}
