import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.ordersService.getAll();

    res.status(200).json(orders);
  }

  async create(req: Request, res: Response) {
    const { authorization: token } = req.headers;

    if (typeof token !== 'string') {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };
    
    req.body.id = decoded.id;
  
    const { productsIds } = req.body;
    const orderCreated = await this.ordersService.create({ userId: decoded.id }, productsIds);
    
    res.status(201).json(orderCreated);
  }
}