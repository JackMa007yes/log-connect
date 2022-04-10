import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserService } from '../user/user.service';
import { ERROR_TYPES } from '../constants/error-types';
import { md5password } from '../utils/password-handler';

@Injectable()
export class verifyUser implements NestMiddleware {
  constructor(private UserService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { name, password } = req.body;
    if (!name || !password) {
      const error = new Error('name_or_passwort_is_required');
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
    //判断不重复
    const result = await this.UserService.findByName(name);
    if (result.length) {
      const error = new Error('user_already_exists');
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
    next();
  }
}
@Injectable()
export class verifyLogin implements NestMiddleware {
  constructor(private UserService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { name, password } = req.body;
    //是否为空
    if (!name || !password) {
      throw new HttpException(
        ERROR_TYPES.NAME_OR_PASSWORD_IS_REQUIRED,
        HttpStatus.BAD_REQUEST,
      );
    }

    //是否存在
    const result = await this.UserService.findByName(name);
    const user = result[0];

    if (!user) {
      throw new HttpException(
        ERROR_TYPES.USER_DOESNOT_EXISTS,
        HttpStatus.BAD_REQUEST,
      );
    }
    //密码错误（加密后对比）
    if (md5password(password) !== user.password) {
      throw new HttpException(
        ERROR_TYPES.PASSWORD_IS_INCORRENT,
        HttpStatus.FORBIDDEN,
      );
    }

    req.body = user;

    next();
  }
}
