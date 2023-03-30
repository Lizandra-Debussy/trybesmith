import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http.exception';

export function nameValidate(req: Request, _res: Response, next: NextFunction) {
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

export function amountValidate(req: Request, _res: Response, next: NextFunction) {
  const { amount } = req.body;
  const num = 2;

  if (!amount) {
    throw new HttpException(400, '"amount" is required');
  }
  if (typeof amount !== 'string') {
    throw new HttpException(422, '"amount" must be a string');
  }

  if (amount.length <= num) {
    throw new HttpException(422, '"amount" length must be at least 3 characters long');
  }
  next();  
}