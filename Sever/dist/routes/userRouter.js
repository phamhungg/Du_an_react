"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
const userController = tsyringe_1.container.resolve(userController_1.UserController);
userRouter.post('/login', userController.authenticate.bind(userController));
exports.default = userRouter;
