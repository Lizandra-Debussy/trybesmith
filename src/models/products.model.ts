import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/products.interface';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

  async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return rows;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const result = await this.connection.execute <ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}