"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("reflect-metadata");
const danhmucRouter_1 = __importDefault(require("./danhmucRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const sanphamRouters_1 = __importDefault(require("./sanphamRouters"));
const router = (0, express_1.Router)();
router.use('/danh-muc', danhmucRouter_1.default);
router.use('/sp', sanphamRouters_1.default);
router.use('/user', userRouter_1.default);
exports.default = router;
// hàm cấp quyền truy cập api
// import { authenticate } from '../middlewares/authMiddleware';
// authenticate
