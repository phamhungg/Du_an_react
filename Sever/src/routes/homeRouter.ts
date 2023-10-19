import { Router } from 'express';
import { container } from 'tsyringe';
import { homeController } from './../controllers/homeController';
const homeRouter = Router();
const HomeController = container.resolve(homeController);
homeRouter.get('/getbyloai/:id', HomeController.GetSanphamByLoai.bind(HomeController) );
export default homeRouter;