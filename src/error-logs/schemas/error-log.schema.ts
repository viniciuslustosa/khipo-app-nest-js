import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ErrorLogDocument = ErrorLog & Document;

@Schema({ versionKey: false })
export class InfoError {
  @Prop()
  message: string;

  @Prop()
  key: string;
}

export const InfoErrorSchema = SchemaFactory.createForClass(InfoError);

@Schema({ versionKey: false })
export class ErrorLog {
  @Prop()
  id: string;

  @Prop()
  code: number;

  @Prop()
  status: number;

  @Prop({ type: MongooseSchema.Types.Array })
  logs: InfoError[];

  @Prop()
  key: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt?: Date;

  @Prop()
  deleted?: boolean;

  @Prop()
  deletedAt?: Date;
}

export const ErrorLogSchema = SchemaFactory.createForClass(ErrorLog);
