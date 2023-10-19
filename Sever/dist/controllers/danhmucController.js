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
exports.DanhMucController = void 0;
const tsyringe_1 = require("tsyringe");
const danhmucService_1 = require("../services/danhmucService");
let DanhMucController = class DanhMucController {
    constructor(danhMucService) {
        this.danhMucService = danhMucService;
    }
    async getBranchById(req, res) {
        try {
            const id = req.params.id;
            const danhmuc = await this.danhMucService.getDanhMucById(id);
            if (danhmuc) {
                res.json(danhmuc);
            }
            else {
                res.json({ message: 'Bản ghi không tồn tại' });
            }
        }
        catch (error) {
            res.json({ message: error.message });
        }
    }
    async getDanhMucAll(req, res) {
        try {
            const data = await this.danhMucService.getDanhMucAll();
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
    async updateDanhMuc(req, res) {
        try {
            const danhmuc = req.body;
            const results = await this.danhMucService.updateDanhMuc(danhmuc);
            res.json({ message: 'Đã cập nhật thành công', results: true });
        }
        catch (error) {
            res.json({ message: error.message, results: false });
        }
    }
    async createDanhMuc(req, res) {
        try {
            const TenDanhMuc = req.body.TenDanhMuc;
            const results = await this.danhMucService.createDanhMuc(TenDanhMuc);
            res.json({ message: 'Thêm thành công', results: true });
        }
        catch (error) {
            res.json({ message: error.message, results: false });
        }
    }
    async Deletedanhmuc(req, res) {
        try {
            const id = req.params.id;
            await this.danhMucService.deleteDanhMuc(id);
            res.json({ message: 'Xoá thành công', data: true });
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async TimKiem(req, res) {
        try {
            const TuKhoa = req.body.TuKhoa;
            const loaihang = await this.danhMucService.timkiem(TuKhoa);
            if (loaihang !== null) {
                res.json(loaihang);
            }
            else {
                res.json({ message: 'Không tìm thấy kết quả' });
            }
        }
        catch (error) {
            res.json({ message: error.message });
        }
    }
};
exports.DanhMucController = DanhMucController;
exports.DanhMucController = DanhMucController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [danhmucService_1.DanhMucService])
], DanhMucController);
