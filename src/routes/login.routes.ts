import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { nameValidation, passwordValidation } from '../middlewares/usersValidation';

const router = Router();
const usersController = new UsersController();

router.post('/', nameValidation, passwordValidation, usersController.login.bind(usersController));

export default router;