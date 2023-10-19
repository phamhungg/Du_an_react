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
exports.DanhMucService = void 0;
const tsyringe_1 = require("tsyringe");
const danhmucRepository_1 = require("../repositories/danhmucRepository");
let DanhMucService = class DanhMucService {
    constructor(danhMucRepository) {
        this.danhMucRepository = danhMucRepository;
    }
    async getDanhMucById(id) {
        return this.danhMucRepository.getDanhMucById(id);
    }
    async getDanhMucAll() {
        return this.danhMucRepository.getDanhMucAll();
    }
    async updateDanhMuc(danhmuc) {
        return this.danhMucRepository.updateDanhMuc(danhmuc);
    }
    async deleteDanhMuc(danhmuc) {
        return this.danhMucRepository.Deletedanhmuc(danhmuc);
    }
    async createDanhMuc(danhmuc) {
        return this.danhMucRepository.CreateDanhMuc(danhmuc);
    }
    async timkiem(TuKhoa) {
        return this.danhMucRepository.timkiem(TuKhoa);
    }
};
exports.DanhMucService = DanhMucService;
exports.DanhMucService = DanhMucService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [danhmucRepository_1.DanhMucRepository])
], DanhMucService);
