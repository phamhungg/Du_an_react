import { injectable } from 'tsyringe';
import { UserRepository } from '../repositories/userRepository';

@injectable()
export class UserService {
  constructor(private userRepository: UserRepository
  ) {}
  async authenticate(Email: string, Matkhau: string): Promise<any> {     
    let khachhang = await this.userRepository.GetUserByAccount(Email, Matkhau);
    if (khachhang) { 
      return {
        iduser: khachhang.Makhachhang,
        name: khachhang.TenKhachHang,
        username: khachhang.Email 
      };
    }
    return null;
  }
}