import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLoginDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required.' })
  password: string;
}
