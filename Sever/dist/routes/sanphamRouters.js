"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const sanphamController_1 = require("./../controllers/sanphamController");
const sanphamRouter = (0, express_1.Router)();
const SanPhamController = tsyringe_1.container.resolve(sanphamController_1.sanphamController);
// danhmucRouter.get('/getbyid/:id', danhmucController.getBranchById.bind(danhmucController));
sanphamRouter.get('/get-all', SanPhamController.getSanPhamAll.bind(SanPhamController));
// danhmucRouter.post('/update', danhmucController.updateDanhMuc.bind(danhmucController));
sanphamRouter.post('/create', SanPhamController.createSanPham.bind(SanPhamController));
// danhmucRouter.delete('/delete/:id', danhmucController.Deletedanhmuc.bind(danhmucController));
// danhmucRouter.get('/timkiem', danhmucController.TimKiem.bind(danhmucController));
exports.default = sanphamRouter;