import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty({ message: 'firstName is required.' })
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required.' })
  password: string;
}
