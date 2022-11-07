import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http.exception';

export default function amountValidate(req: Request, _res: Response, next: NextFunction) {
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