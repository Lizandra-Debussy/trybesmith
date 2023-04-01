import { RowDataPacket, ResultSetHeader } from 'mysql2';
import IOrders from '../interfaces/orders.interface';

import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

  async getAll(): Promise<IOrders[]> {
    const [rows] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT
        o.id,
        o.userId,
        JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
      GROUP BY o.id`,
    );
    
    return rows;
  }

  public async create(user: { userId: number }, productsIds: number[]) {
    const { userId } = user;

    const result = await this.connection.execute <ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    const [dataInserted] = result;
    const orderId = dataInserted.insertId;

    const productsPromises = productsIds.map((productId) =>
      this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [orderId, productId],
      ));

    await Promise.all(productsPromises);

    return { userId, productsIds };
  }
}