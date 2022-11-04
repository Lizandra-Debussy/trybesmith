import IProduct from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public product = new ProductsModel();
  
  public create(productData: IProduct): Promise<IProduct> {
    return this.product.create(productData);
  }
}