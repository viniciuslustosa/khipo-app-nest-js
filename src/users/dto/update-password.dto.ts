import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty({ message: 'password is required.' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required.' })
  oldPassword: string;
}
