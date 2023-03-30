import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import { nameValidate, amountValidate } from '../middlewares/productsValidation';

const router = Router();
const productsController = new ProductsController();

router.get('/', productsController.getAll.bind(productsController));
router.post(
  '/', 
  nameValidate,
  amountValidate,
  productsController.create.bind(productsController),
);

export default router;