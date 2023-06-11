import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateLoginDto } from './dto/create-login.dto';
import { Model } from 'mongoose';
import { UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL') private readonly userModel: Model<UserDocument>,
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    try {
      const data = await this.userModel
        .findOne({ email: createAuthDto.email })
        .select('-password');
      if (data) {
        throw new HttpException({}, HttpStatus.BAD_REQUEST);
      }

      const user = await this.usersService.create(createAuthDto);
      const payload = {
        sub: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      return {
        accessToken: this.jwtService.sign(payload),
        user,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(error, error.status).getResponse();
    }
  }

  async login(createLoginDto: CreateLoginDto) {
    try {
      const user = await this.userModel.findOne({
        email: createLoginDto.email,
      });

      if (!user) throw new HttpException({}, HttpStatus.BAD_REQUEST);
      const isPasswordValid = await bcrypt.compare(
        createLoginDto.password,
        user.password,
      );
    
      if (!isPasswordValid) {
        throw new HttpException({}, HttpStatus.BAD_REQUEST);
      }

      const payload = {
        sub: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      return {
        accessToken: this.jwtService.sign(payload),
        user,
      };
    } catch (error) {
      throw new HttpException(error, error.status).getResponse();
    }
  }

  async validateUser(email: string, password: string) {
    console.log('testedawdawd')
    const user = await this.userModel.findOne({ email });
    if (user === null) {
      throw new HttpException({}, HttpStatus.UNAUTHORIZED);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
