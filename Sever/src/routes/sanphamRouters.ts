import { Router } from 'express';
import { container } from 'tsyringe';
import { sanphamController } from './../controllers/sanphamController';
const sanphamRouter = Router();
const SanPhamController = container.resolve(sanphamController);
sanphamRouter.get('/getbyid/:id', SanPhamController.getSanPhamById.bind(SanPhamController));

sanphamRouter.get('/get-all', SanPhamController.getSanPhamAll.bind(SanPhamController));
sanphamRouter.post('/update', SanPhamController.updateSanPham.bind(SanPhamController));
sanphamRouter.post('/create', SanPhamController.createSanPham.bind(SanPhamController));
sanphamRouter.delete('/delete/:id', SanPhamController.Deletesanpham.bind(SanPhamController));
// danhmucRouter.get('/timkiem', danhmucController.TimKiem.bind(danhmucController));
export default sanphamRouter;