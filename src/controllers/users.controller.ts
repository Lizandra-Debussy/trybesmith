import { Request, Response } from 'express';
import ILogin from '../interfaces/login.interface';
import UsersService from '../services/users.service';

export default class UsersController {
  public usersService = new UsersService();

  async login(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;

    const token = await this.usersService.login(body);
    return res.status(200).json({ token });
  }

  async create(req: Request, res: Response) {
    const user = req.body;

    const userCreated = await this.usersService.create(user);
    const token = await this.usersService.generateToken(userCreated);
    res.status(201).json({ token });
  }
}