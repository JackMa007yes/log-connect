import { Request, Response, NextFunction } from 'express';
import { md5password } from '../utils/password-handler';

export async function handlePassword(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { password } = req.body;
  req.body.password = md5password(password);
  next();
}
