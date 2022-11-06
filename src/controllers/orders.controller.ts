import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.ordersService.getAll();

    res.status(200).json(orders);
  }
}