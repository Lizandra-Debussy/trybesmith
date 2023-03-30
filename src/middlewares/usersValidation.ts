import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http.exception';

export function nameValidation(req: Request, _res: Response, next: NextFunction) {
  const { username } = req.body;
  const num = 2;

  if (!username) {
    throw new HttpException(400, '"username" is required');
  }

  if (typeof username !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }

  if (username.length <= num) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
  next();  
}

export function classeValidation(req: Request, _res: Response, next: NextFunction) {
  const { classe } = req.body;
  const num = 2;

  if (!classe) {
    throw new HttpException(400, '"classe" is required');
  }

  if (typeof classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }

  if (classe.length <= num) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
  next();  
}

export function levelValidation(req: Request, _res: Response, next: NextFunction) {
  const { level } = req.body;
  const num = 1;

  if (level === undefined) {
    throw new HttpException(400, '"level" is required');
  }

  if (typeof level !== 'number') {
    throw new HttpException(422, '"level" must be a number');
  }

  if (level < num) {    
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }
  next();  
}

export function passwordValidation(req: Request, _res: Response, next: NextFunction) {
  const { password } = req.body;
  const num = 8;

  if (!password) {
    throw new HttpException(400, '"password" is required');
  }

  if (typeof password !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }

  if (password.length <= num) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
  next();  
}