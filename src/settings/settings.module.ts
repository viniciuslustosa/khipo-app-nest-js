import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { settingsProviders } from './providers/setting.provider';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({})
export class SettingsModule {
  static configure(env): DynamicModule {
    return {
      module: this,
      imports: [DatabaseModule.configure(env)],
      controllers: [SettingsController],
      providers: [
        SettingsService,
        ...settingsProviders,
        { provide: 'ENV', useValue: env },
      ],
      exports: [SettingsService],
    };
  }
}
