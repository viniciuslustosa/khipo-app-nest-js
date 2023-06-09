import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('ENV') private readonly env: any) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.JWT_CONSTANTS_SECRET,
    });
  }

  async validate(payload: any) {
    console.log(payload)
    return {
      userId: payload.sub,
      username: payload.username,
      email: payload.email,
      type: payload.type,
    };
  }
}
