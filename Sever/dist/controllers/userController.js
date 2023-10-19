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
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const userSevice_1 = require("../services/userSevice");
const jwt_1 = require("../config/jwt");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async authenticate(req, res) {
        try {
            const { Email, Matkhau } = req.body;
            const user = await this.userService.authenticate(Email, Matkhau);
            if (user) {
                const token = (0, jwt_1.generateToken)(user);
                user.token = token;
                res.json(user);
            }
            else {
                res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
            }
        }
        catch (error) {
            res.json({ message: error.message });
        }
    }
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [userSevice_1.UserService])
], UserController);
