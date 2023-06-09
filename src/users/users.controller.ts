import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from 'src/common/utils/file-upload.util';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/filter')
  @UseGuards(AuthGuard('jwt-admin'))
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt-admin'))
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Patch()
  @UseGuards(AuthGuard('jwt'))
  update(@Body() updateUserDto: UpdateUserDto, @Req() req) {
    const { userId } = req.user;
    return this.usersService.update(userId, updateUserDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt-admin'))
  updateAdmin(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Post('/recovery')
  @UseGuards(AuthGuard('jwt'))
  recovery(@Body() updatePasswordDto: UpdatePasswordDto, @Req() req) {
    const { userId } = req.user;
    console.log(userId);
    return this.usersService.recovery(userId, updatePasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: imageFileFilter,
    }),
  )
  async upload(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    return await this.usersService.upload(file.buffer, file.originalname);
  }
}
