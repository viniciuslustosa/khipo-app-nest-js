import { DynamicModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './providers/user.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({})
export class UsersModule {
  static configure(env): DynamicModule {
    return {
      module: this,
      imports: [DatabaseModule.configure(env)],
      controllers: [UsersController],
      providers: [
        UsersService,
        ...usersProviders,
        { provide: 'ENV', useValue: env },
      ],
      exports: [UsersService, ...usersProviders],
    };
  }
}
