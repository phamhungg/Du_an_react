import { sanphamRepository } from './../repositories/sanphamRepository';
import { injectable } from 'tsyringe';


@injectable()
export class sanphamService {
  constructor(private sanphamRepository: sanphamRepository
  ) {}
  async getSanPhamById(id: string): Promise<any> {
    return this.sanphamRepository.getSanPhamById(id);
  }
  
  async getSanPhamAll(): Promise<any> {
    return this.sanphamRepository.getSanPhamAll();
  }
  async updateSanPham(sanpham: any): Promise<any> {
    return this.sanphamRepository.updateSanPham(sanpham);
  }
  async deleteSanPham(sanpham: any): Promise<any> {
    return this.sanphamRepository.Deletesanpham(sanpham);
  }

  async createSanPham(MaDanhMuc: string, TenSanPham: string,MoTaSanPham: string ,AnhDaiDien: string,Mausac: string, Giaban: string): Promise<any> {
    return this.sanphamRepository.CreateSanPham(MaDanhMuc,TenSanPham,MoTaSanPham,AnhDaiDien,Mausac,Giaban);
  }
//   async timkiem(TuKhoa: string): Promise<any> {
//     return this.danhMucRepository.timkiem(TuKhoa);
//   }
}