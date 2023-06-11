import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'firstName is required.' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'lastName is required.' })
  lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required.' })
  password: string;
}