import { IsNumber,IsDate } from 'class-validator';

export class CreateModulelogDto {

    @IsNumber()
    modulestateid: number;

    @IsNumber()
    noofdata: number;
    
    @IsDate()
    running_timeend 
}
