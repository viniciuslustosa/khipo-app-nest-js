import {
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MessagesErrorHelper } from './common/errors/helpers/errors.helper';
import { CreateErrorLogDto } from './error-logs/dto/create-error-log.dto';
import { config } from 'aws-sdk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.configure(process.env));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  config.update({
    accessKeyId: 'AKIASMZRIMEAUSWZJO2Y',
    secretAccessKey: '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',
    region: 'us-east-1',
  });

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errors = [];
        validationErrors.forEach((error) => {
          while (error.children && error.children.length > 0) {
            if (error.children.length == 1) {
              error = error.children[0];
            } else {
              break;
            }
          }
          if (!error.constraints) {
            error.children.forEach((err) => {
              errors.push({
                message: Object.keys(err.constraints)
                  .map((key) => {
                    return err.constraints[key];
                  })
                  .join(', '),
                key:
                  err.property.replace(/([A-Z])/g, '_$1').toUpperCase() +
                  '_ERROR',
              });
            });
          } else {
            errors.push({
              message: Object.keys(error.constraints)
                .map((key) => {
                  return error.constraints[key];
                })
                .join(', '),
              key:
                error.property.replace(/([A-Z])/g, '_$1').toUpperCase() +
                '_ERROR',
            });
          }
        });
        const errorOutput: CreateErrorLogDto = {
          _id: null,
          code: MessagesErrorHelper.INCORRECT_FIELD.code,
          status: HttpStatus.NOT_ACCEPTABLE,
          logs: errors,
        };
        return new HttpException(errorOutput, HttpStatus.NOT_ACCEPTABLE);
      },
    }),
  );

  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
