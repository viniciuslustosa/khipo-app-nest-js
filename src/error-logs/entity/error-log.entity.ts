import { ObjectId } from 'mongoose';

interface InfoError {
  message?: string;
  key?: string;
}

export class ErrorLogEntity {
  _id?: ObjectId;
  code?: number;
  status?: number;
  logs?: InfoError[];
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: boolean;

  constructor(error?: Partial<ErrorLogEntity>) {
    this._id = error?._id;
    this.status = error?.status;
    this.logs = error?.logs;
    this.createdAt = error?.createdAt;
    this.updatedAt = error?.updatedAt;
    this.deletedAt = error?.deletedAt;
    this.deleted = error?.deleted;
  }
}
