import IOrders from '../interfaces/orders.interface';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public order = new OrdersModel();

  async getAll(): Promise<IOrders[]> {
    const orders = await this.order.getAll();
    return orders;
  }

  async create(user: { userId: number }, productsIds: number[]) {
    return this.order.create(user, productsIds);
  }
}