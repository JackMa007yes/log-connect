import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { handlePassword } from './user.middlewaire';
import { verifyUser } from '../app.middlewaire';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(verifyUser, handlePassword)
      .forRoutes({ path: '/user', method: RequestMethod.POST });
  }
}
