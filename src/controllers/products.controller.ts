import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();

  async create(req: Request, res: Response) {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(201).json(productCreated);
  }
}