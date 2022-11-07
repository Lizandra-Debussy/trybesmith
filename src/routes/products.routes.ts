import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import nameValidate from '../middlewares/nameValidation';
import amountValidate from '../middlewares/amountValidation';

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