import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

@Controller('moment')
export class MomentController {
  // constructor(private UserService: UserService) {}

  @Post()
  async create(@Body() body) {
    return 'list';
  }

  @Get()
  async getAll() {
    return 'list';
  }

  @Get('/:momentId')
  async getOne(@Param('momentId') momentId: string) {
    return momentId;
  }

  @Patch('/:momentId')
  async patch(@Param('momentId') momentId: string) {
    return momentId;
  }

  @Delete('/:momentId')
  async delete(@Param('momentId') momentId: string) {
    return momentId;
  }

  @Post('/:momentId/labels')
  async c(@Param('momentId') momentId: string, @Body() body) {
    return 'list';
  }

  @Post('/images/:filename')
  async d(@Param('momentId') momentId: string, @Body() body) {
    return 'list';
  }
}
