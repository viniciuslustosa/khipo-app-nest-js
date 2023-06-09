import { Inject, Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Model } from 'mongoose';
import { SettingDocument } from './schemas/setting.schema';

@Injectable()
export class SettingsService {
  constructor(
    @Inject('SETTING_MODEL')
    private readonly settingModel: Model<SettingDocument>,
  ) {}

  create(createSettingDto: CreateSettingDto) {
    try {
      return this.settingModel.create(createSettingDto);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.settingModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    try {
      return this.settingModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    try {
      return this.settingModel.findByIdAndUpdate(id, updateSettingDto);
    } catch (error) {
      console.log(error);
    }
  }
}
