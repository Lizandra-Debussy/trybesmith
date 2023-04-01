import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middleware';
import ordersValidation from '../middlewares/ordersValidation';

const router = Router();
const ordersController = new OrdersController();

router.get('/', ordersController.getAll.bind(ordersController));
router.post(
  '/',
  authMiddleware,
  ordersValidation,
  ordersController.create.bind(ordersController),
);

export default router;