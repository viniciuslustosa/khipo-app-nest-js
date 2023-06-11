import { MorganMiddleware } from '@nest-middlewares/morgan';
import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    MorganMiddleware.configure('[:method] :url - :status (:response-time ms)');
    consumer
      .apply(MorganMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }

  static configure(config): DynamicModule {
    return {
      module: this,
      imports: [
        ConfigModule.forRoot(),
        DatabaseModule.configure(config),
        UsersModule.configure(config),
        AuthModule.configure(config),
      ],
      providers: [],
    };
  }
}
