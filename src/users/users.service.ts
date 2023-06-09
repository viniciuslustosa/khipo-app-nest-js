import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { User } from './entities/user.entity';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { v4 as uuid } from 'uuid';
import { S3 } from 'aws-sdk';
import * as bcrypt from 'bcrypt';

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

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id);
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto);

    if (user.active !== updateUserDto.active && updateUserDto.active && user.type === 'PRODUCER') {
      if (!user) {
        throw new HttpException({}, HttpStatus.BAD_REQUEST);
      }
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'noreply.recoss@gmail.com',
          pass: 'dhobfqicwimygwej',
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      await transporter.sendMail({
        text: `Sua conta está ativa!`,
        subject: 'Um administrador confirmou seus dados, você já pode fazer login no app Recoss',
        from: 'noreply.recoss@gmail.com',
        to: updatedUser.email,
        html: "<div style='width: 100%; align-items: center; justify-content: center; background-color: #F7F7F7; padding: 10px'>" + 
                "<img src='https://recoss-s3.s3.amazonaws.com/6546a593-64be-4b3e-9214-a022f9303b2f-image.jpg' style='display: block; margin-left: auto; margin-right: auto; margin-top: 20px; width: 40%'  alt=''>" +
                "<br>" + 
                `<p>Olá <b>${updatedUser.name}</b>, o seu usuário <b>RECOSS</b> foi analisado e validado por um de nossos administradores.</p>` +
                "<p>Você já pode acessar todos os recursos de nossa plataforma, basta realizar seu login.</p>" +
            "</div>"
        });
    }
    
    return updatedUser
  }

  async recovery(id: string, updatePasswordDto: UpdatePasswordDto) {
    try {
      const user = await this.userModel.findById(id);

      const isPasswordValid = await bcrypt.compare(
        updatePasswordDto.oldPassword,
        user.password,
      );
      if (!isPasswordValid) {
        throw new HttpException({}, HttpStatus.UNAUTHORIZED);
      }

      const hashed = await bcrypt.hash(updatePasswordDto.password, 12);

      return await this.userModel.findByIdAndUpdate(id, { password: hashed });
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async upload(dataBuffer: Buffer, filename: string) {
    try {
      const s3 = new S3();
      const uploadResult = await s3
        .upload({
          Bucket: 'recoss-s3',
          Body: dataBuffer,
          Key: `${uuid()}-${filename}`,
        })
        .promise();

      return {
        key: uploadResult.Key,
        url: uploadResult.Location,
      };
    } catch (err) {
      console.log(err);
      return { key: 'error', url: err.message };
    }
  }

  async updateSocket(personId: string, socket: string) {
    try {
      await this.userModel.findByIdAndUpdate(personId, { socket });
    } catch (error) {
      throw new HttpException(error, error.status).getResponse();
    }
  }

  async index(userId: string): Promise<User> {
    return await this.userModel.findOne({
      _id: userId,
    });
  }
}
