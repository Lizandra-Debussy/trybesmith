import IProduct from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public product = new ProductsModel();

  async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }
  
  public create(productData: IProduct): Promise<IProduct> {
    return this.product.create(productData);
  }
}