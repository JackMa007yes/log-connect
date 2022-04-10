import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post('login')
  login(@Body() body: any) {
    return body;
  }

  @Get('/test')
  test() {
    return 'test';
  }
}
