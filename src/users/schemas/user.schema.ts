import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  cpf: string;

  @Prop()
  socket: string;

  @Prop()
  password: string;

  @Prop()
  avatarUrl?: string;

  @Prop()
  zipCode?: string;

  @Prop()
  street?: string;

  @Prop()
  neighborhood?: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  number: string;

  @Prop()
  type: string;

  @Prop()
  active: boolean;

  @Prop()
  deleted: boolean;

  @Prop()
  deletedAt: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  bannerImage: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
