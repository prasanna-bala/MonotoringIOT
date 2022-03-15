import { IsString,IsNumber,IsDate } from 'class-validator';

export class CreateModuleDto {
 
    @IsString()
    name: String;

    @IsString()
    description: String;

    @IsString()
    type: String;

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
