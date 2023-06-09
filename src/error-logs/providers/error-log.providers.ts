import { Connection } from 'mongoose';
import { ErrorLogSchema } from '../schemas/error-log.schema';

export const errorLogsProviders = [
  {
    provide: 'ERROR_LOG_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('error-logs', ErrorLogSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
