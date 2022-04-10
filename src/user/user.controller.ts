import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post()
  async create(@Body() body) {
    const res = await this.UserService.create(body);
    return res;
  }
  @Get('all')
  async getAll() {
    const list = await this.UserService.findAll();
    return list;
  }
  @Get('/:userName')
  async getOne(@Param('userName') userName: string) {
    const list = await this.UserService.findByName(userName);
    return list;
  }
  @Delete('/:userId')
  async delete(@Param('userId') userid: string) {
    const list = this.UserService.remove(userid);
    return list;
  }
  @Get('/:userId/avatar')
  getUserByName(@Param('userId') userid: string) {
    return userid;
  }
}
