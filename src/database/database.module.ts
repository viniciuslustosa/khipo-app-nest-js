import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as mongoose from 'mongoose';

@Module({})
export class DatabaseModule {
  static configure(env): DynamicModule {
    return {
      module: this,
      imports: [ConfigModule.forRoot()],
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(env.MONGODB_URI_DEV),
        },
      ],
      exports: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(env.MONGODB_URI_DEV),
        },
      ],
    };
  }
}
