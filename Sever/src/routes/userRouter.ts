import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/userController';
const userRouter = Router();
const userController = container.resolve(UserController);
userRouter.post('/login', userController.authenticate.bind(userController));
export default userRouter;