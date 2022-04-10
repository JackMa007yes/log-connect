import { Request, Response, NextFunction } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');

export async function login(req: Request, res: Response, next: NextFunction) {
  const { id, name } = req.body;
  const token = jwt.sign({ id, name }, PRIVATE_KEY, {
    expiresIn: 60 * 60 * 24,
    algorithm: 'RS256',
  });
  return {
    id,
    name,
    token,
  };
}
