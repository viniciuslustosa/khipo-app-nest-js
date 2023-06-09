import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecoveryDto {
  @IsString()
  @IsNotEmpty({ message: 'oldPassword is required.' })
  oldPassword: string;

  @IsString()
  @IsNotEmpty({ message: 'newPassword is required.' })
  newPassword: string;
}
