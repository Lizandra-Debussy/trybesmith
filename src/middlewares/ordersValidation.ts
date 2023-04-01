import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http.exception';

export default function productsIdsValidate(req: Request, _res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  if (!productsIds) {
    throw new HttpException(400, '"productsIds" is required');
  }

  if (!Array.isArray(productsIds)) {
    throw new HttpException(422, '"productsIds" must be an array');
  }

  if (Array.isArray(productsIds) && productsIds.length === 0) {
    throw new HttpException(422, '"productsIds" must include only numbers');
  }
  next();  
}