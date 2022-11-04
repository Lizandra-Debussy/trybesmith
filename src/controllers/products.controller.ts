import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();

  async getAll(_req: Request, res: Response) {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  }

  async create(req: Request, res: Response) {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(201).json(productCreated);
  }
}