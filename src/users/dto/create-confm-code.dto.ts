import { IsEmail, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateConfirmCodeDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required.' })
  email: string;

  @IsNumberString()
  @IsNotEmpty({ message: 'code is required.' })
  code: string;

  @IsString()
  @IsNotEmpty({ message: 'newPassword is required.' })
  newPassword: string;
}
