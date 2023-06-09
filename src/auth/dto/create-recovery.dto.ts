import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecoveryDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required.' })
  email: string;
}
