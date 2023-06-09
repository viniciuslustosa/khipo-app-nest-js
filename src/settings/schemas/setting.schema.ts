import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SettingDocument = Setting & Document;

@Schema({ timestamps: true })
export class Setting {
  @Prop()
  name: string;

  @Prop()
  icon: string;

  @Prop()
  route: string;

  @Prop()
  active: boolean;

  @Prop()
  position: number;

  @Prop()
  deleted: boolean;

  @Prop()
  deletedAt: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
