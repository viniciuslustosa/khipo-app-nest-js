import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsEmail, IsNumberString, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsNumberString()
  @IsOptional()
  cpf?: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsNumberString()
  @IsOptional()
  zipCode?: string;

  @IsString()
  @IsOptional()
  street?: string;

  @IsString()
  @IsOptional()
  neighborhood?: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsNumberString()
  @IsOptional()
  number: string;

  @IsString()
  @IsOptional()
  bannerImage?: string;
}
