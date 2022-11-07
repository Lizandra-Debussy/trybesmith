import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http.exception';

export default function nameValidate(req: Request, _res: Response, next: NextFunction) {
  const { name } = req.body;
  const num = 2;

  if (!name) {
    throw new HttpException(400, '"name" is required');
  }

  if (typeof name !== 'string') {
    throw new HttpException(422, '"name" must be a string');
  }

  if (name.length <= num) {
    throw new HttpException(422, '"name" length must be at least 3 characters long');
  }
  next();  
}