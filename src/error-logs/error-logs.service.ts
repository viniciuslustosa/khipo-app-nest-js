import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ErrorLogDocument } from './schemas/error-log.schema';
import { CreateErrorLogDto } from './dto/create-error-log.dto';
import { ErrorLogEntity } from './entity/error-log.entity';

@Injectable()
export class ErrorLogsService {
  constructor(
    @Inject('ERROR_LOG_MODEL')
    private readonly errorLogModel: Model<ErrorLogDocument>,
  ) {}

  async create(createErrorLogDto: CreateErrorLogDto): Promise<ErrorLogEntity> {
    return await this.errorLogModel.create(createErrorLogDto);
  }

  async findAll(): Promise<ErrorLogEntity[]> {
    return await this.errorLogModel.find().exec();
  }

  async findOne(id: string): Promise<ErrorLogEntity> {
    return await this.errorLogModel.findById(id).exec();
  }
}
