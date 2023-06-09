import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Icon is required' })
  icon: string;

  @IsString()
  @IsNotEmpty({ message: 'Route is required' })
  route: string;

  @IsBoolean()
  @IsNotEmpty({ message: 'Active is required' })
  active: boolean;

  @IsNumber()
  @IsNotEmpty({ message: 'Position is required' })
  position: number;
}
