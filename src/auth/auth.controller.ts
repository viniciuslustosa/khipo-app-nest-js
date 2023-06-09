import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateLoginDto } from './dto/create-login.dto';
import { CreateRecoveryDto } from './dto/create-recovery.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  login(@Body() createLoginDto: CreateLoginDto) {
    return this.authService.login(createLoginDto);
  }

  @Post('/recovery')
  @UsePipes(ValidationPipe)
  recoveryPassword(@Body() createRecoveryDto: CreateRecoveryDto) {
    return this.authService.recovery(createRecoveryDto);
  }

  @Get('/refresh')
  refresh() {
    return 'Conferred';
  }
}
