import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCodeDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required.' })
  email: string;
}
