import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/products.interface';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

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