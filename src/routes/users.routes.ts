import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { nameValidation, classeValidation,
  levelValidation, passwordValidation } from '../middlewares/usersValidation';

const router = Router();
const usersController = new UsersController();

router.post(
  '/',
  nameValidation,
  classeValidation,
  levelValidation,
  passwordValidation,
  usersController.create.bind(usersController),
);

export default router;