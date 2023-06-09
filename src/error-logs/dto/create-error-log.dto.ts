import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

class ErrorLogDto {
  @IsString()
  @IsNotEmpty({ message: 'Message is required' })
  message?: string;

  @IsNotEmpty({ message: 'Key is required' })
  key?: string;
}

export class CreateErrorLogDto {
  @IsString()
  @IsNotEmpty({ message: 'State is required' })
  _id?: ObjectId;

  @IsNumber()
  @IsNotEmpty({ message: 'Code is required' })
  code?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Status is required' })
  status?: number;

  @IsString()
  @IsNotEmpty({ message: 'Message is required' })
  logs?: ErrorLogDto[];
}
