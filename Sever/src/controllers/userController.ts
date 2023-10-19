import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { UserService } from '../services/userSevice';
import { generateToken } from '../config/jwt';

@injectable()
export class UserController {
  constructor(private userService: UserService 
  ) { } 
  
  async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { Email, Matkhau } = req.body;
      const user = await this.userService.authenticate(Email, Matkhau);
      if (user) {
        const token = generateToken(user);
        user.token = token;
        res.json(user);
      } else {
        res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

}