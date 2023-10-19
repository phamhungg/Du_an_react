import { Router } from 'express';
import 'reflect-metadata';
import danhmucRouter from './danhmucRouter';
import userRouter from './userRouter';
import sanphamRouter from './sanphamRouters';
import homeRouter from './homeRouter';

const router = Router();
router.use('/danh-muc',danhmucRouter);
router.use('/sp',sanphamRouter);
router.use('/user', userRouter);
router.use('/home', homeRouter);
export default router;




// hàm cấp quyền truy cập api
// import { authenticate } from '../middlewares/authMiddleware';

// authenticate
