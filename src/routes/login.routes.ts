import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import loginValidate from '../middlewares/loginValidation';

const router = Router();
const usersController = new UsersController();

router.post('/', loginValidate, usersController.login.bind(usersController));

export default router;