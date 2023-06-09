import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

enum TypeUser {
  Producer = 'PRODUCER',
  Consumer = 'CONSUMER',
}

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty({ message: 'name is required.' })
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'email is required.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'phoneNumber is required.' })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required.' })
  password: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsNumberString()
  @IsNotEmpty({ message: 'zipCode is required.' })
  zipCode?: string;

  @IsString()
  @IsNotEmpty({ message: 'street is required.' })
  street?: string;

  @IsString()
  @IsNotEmpty({ message: 'neighborhood is required.' })
  neighborhood?: string;

  @IsNumberString()
  @IsNotEmpty({ message: 'cpf is required.' })
  cpf?: string;

  @IsString()
  @IsNotEmpty({ message: 'city is required.' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'state is required.' })
  state: string;

  @IsNumberString()
  @IsNotEmpty({ message: 'number is required.' })
  number: string;

  @IsNotEmpty({ message: 'type is required.' })
  @IsEnum(TypeUser)
  type: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;
}
