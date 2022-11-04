import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  public usersService = new UsersService();

  async create(req: Request, res: Response) {
    const user = req.body;

    const userCreated = await this.usersService.create(user);
    const token = await this.usersService.generateToken(userCreated);
    res.status(201).json({ token });
  }
}