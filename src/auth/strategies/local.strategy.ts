import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(
      email.toLowerCase(),
      password,
    );

    if (!user) {
      if (user === null) {
        throw new HttpException({}, HttpStatus.NOT_FOUND);
      }
    }

    return true;
  }
}
