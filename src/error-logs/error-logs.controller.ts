import { Body, Controller, Post } from '@nestjs/common';
import { ErrorLogsService } from './error-logs.service';

@Controller('error')
export class ErrorLogsController {
  constructor(private readonly errorsService: ErrorLogsService) {}

  @Post()
  send(@Body() data: any) {
    return this.errorsService.create(data);
  }
}
