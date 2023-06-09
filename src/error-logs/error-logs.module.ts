import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ErrorLogsController } from './error-logs.controller';
import { ErrorLogsService } from './error-logs.service';
import { errorLogsProviders } from './providers/error-log.providers';

@Module({})
export class ErrorLogsModule {
  static configure(env): DynamicModule {
    return {
      module: this,
      imports: [DatabaseModule.configure(env)],
      controllers: [ErrorLogsController],
      providers: [
        ErrorLogsService,
        { provide: 'ENV', useValue: env },
        ...errorLogsProviders,
      ],
      exports: [ErrorLogsService],
    };
  }
}
