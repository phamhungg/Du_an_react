"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanphamController = void 0;
const sanphamService_1 = require("./../services/sanphamService");
const tsyringe_1 = require("tsyringe");
let sanphamController = class sanphamController {
    constructor(sanphamService) {
        this.sanphamService = sanphamService;
    }
    //   async getBranchById(req: Request, res: Response): Promise<void> {
    //     try {
    //       const id = req.params.id;
    //       const danhmuc = await this.danhMucService.getDanhMucById(id);   
    //       if (danhmuc) {
    //         res.json(danhmuc);
    //       } else {
    //         res.json({ message: 'Bản ghi không tồn tại' });
    //       }
    //     } catch (error: any) {
    //       res.json({ message: error.message });
    //     }
    //   }
    async getSanPhamAll(req, res) {
        try {
            const data = await this.sanphamService.getSanPhamAll();
            if (data && data.length > 0) {
                res.json(data);
            }
            else {
                res.json({ message: 'Không lấy được danh sách' });
            }
        }
        catch (error) {
            res.json({ message: error.message });
        }
    }
    //   async updateDanhMuc(req: Request, res: Response): Promise<void> {
    //     try {
    //       const danhmuc = req.body as { MaDanhMuc: string, TenDanhMuc: string  };
    //       const results = await this.danhMucService.updateDanhMuc(danhmuc);
    //       res.json({ message: 'Đã cập nhật thành công', results: true });
    //     } catch (error: any) {
    //       res.json({ message: error.message, results: false });
    //     }
    //   }
    async createSanPham(req, res) {
        try {
            const MaDanhMuc = req.body.MaDanhMuc;
            const TenSanPham = req.body.TenSanPham;
            const MoTaSanPham = req.body.MoTaSanPham;
            const AnhDaiDien = req.body.AnhDaiDien;
            const Mausac = req.body.Mausac;
            const Giaban = req.body.Giaban;
            const results = await this.sanphamService.createSanPham(MaDanhMuc, TenSanPham, MoTaSanPham, AnhDaiDien, Mausac, Giaban);
            res.json({ message: 'Thêm thành công', results: true });
        }
        catch (error) {
            res.json({ message: error.message, results: false });
        }
    }
};
exports.sanphamController = sanphamController;
exports.sanphamController = sanphamController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [sanphamService_1.sanphamService])
], sanphamController);
