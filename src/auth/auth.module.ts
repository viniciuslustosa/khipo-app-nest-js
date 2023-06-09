import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtAdminStrategy } from './strategies/jwt-admin.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  static configure(env): DynamicModule {
    return {
      module: this,
      imports: [
        UsersModule.configure(env),
        PassportModule,
        JwtModule.registerAsync({
          useFactory: () => {
            return {
              secret: env.JWT_CONSTANTS_SECRET,
              signOptions: {
                expiresIn: env.ENVIRONMENT != 'production' ? '1800s' : '1800s',
              },
            };
          },
        }),
      ],
      controllers: [AuthController],
      providers: [
        JwtAdminStrategy,
        LocalStrategy,
        JwtStrategy,
        AuthService,
        { provide: 'ENV', useValue: env },
      ],
      exports: [AuthService],
    };
  }
}
