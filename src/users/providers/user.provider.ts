import { Connection } from 'mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => {
      UserSchema.pre<User>('save', async function (next) {
        if (this.email) {
          const emailLowerCase = this.email.toLowerCase();
          this.email = emailLowerCase;
        }
        if (this.password) {
          const hashed = await bcrypt.hash(this.password, 12);
          this.password = hashed;
        }
        next();
      });
      return connection.model('User', UserSchema);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
