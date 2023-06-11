import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL') private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email: email }).exec();
  }

  async filter(query: any): Promise<User[]> {
    return await this.userModel.find(query);
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async index(userId: string): Promise<User> {
    return await this.userModel.findOne({
      _id: userId,
    });
  }
}
