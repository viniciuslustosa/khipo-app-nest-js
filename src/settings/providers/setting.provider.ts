import { Connection } from 'mongoose';
import { SettingSchema } from '../schemas/setting.schema';

export const settingsProviders = [
  {
    provide: 'SETTING_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Setting', SettingSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
