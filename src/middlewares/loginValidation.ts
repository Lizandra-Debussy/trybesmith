import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http.exception';

export default function loginValidate(req: Request, _res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (username === '' || !username) {
    throw new HttpException(400, '"username" is required');
  }

  if (password === '' || !password) {
    throw new HttpException(400, '"password" is required');
  }

  next();  
}