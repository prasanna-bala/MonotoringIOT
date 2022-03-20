import { IsString,IsNumber,IsDate } from 'class-validator';

export class CreateModuleDto {
 
    @IsString()
    modulename: string;

    @IsString()
    description: string;

    @IsString()
    type: string;

}

export class CreateModulestateDto {
 
    @IsString()
    moduleid: number;
     
    @IsNumber()
    temprature: number;

    @IsDate()
    schedule_timestart: Date;
      
    @IsDate()
    schedule_timeend: Date;
  
}
