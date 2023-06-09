import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateSettingDto } from './create-setting.dto';

export class UpdateSettingDto extends PartialType(CreateSettingDto) {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  icon: string;

  @IsString()
  @IsOptional()
  route: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsNumber()
  @IsOptional()
  position: number;
}
