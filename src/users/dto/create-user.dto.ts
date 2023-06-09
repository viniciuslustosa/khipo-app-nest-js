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

export class CreateUserDto {
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
  @IsOptional()
  cpf?: string;

  @IsNumberString()
  @IsNotEmpty({ message: 'zipcode is required.' })
  zipCode?: string;

  @IsString()
  @IsNotEmpty({ message: 'street is required.' })
  street?: string;

  @IsString()
  @IsNotEmpty({ message: 'neighborhood is required.' })
  neighborhood?: string;

  @IsString()
  @IsNotEmpty({ message: 'city is required.' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'state is required.' })
  state: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsNumberString()
  @IsNotEmpty({ message: 'number is required.' })
  number: string;
}
