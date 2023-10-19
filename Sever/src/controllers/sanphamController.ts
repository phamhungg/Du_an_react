import { DanhMucService } from './../services/danhmucService';
import { sanphamService } from './../services/sanphamService';
import { Request, Response } from 'express';
import { injectable } from "tsyringe";


@injectable()
export class sanphamController {
  constructor(private sanphamService: sanphamService 
  ) { } 
  
  async getSanPhamById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const sanpham = await this.sanphamService.getSanPhamById(id);   
      if (sanpham) {
        res.json(sanpham);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  

  
  async getSanPhamAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.sanphamService.getSanPhamAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updateSanPham(req: Request, res: Response): Promise<void> {
    try {
      const sanpham = req.body as { MaSanPham: string, MaDanhMuc: string, TenSanPham: string, MoTaSanPham: string, AnhDaiDien: string, Mausac: string, Giaban: string   };
      const results = await this.sanphamService.updateSanPham(sanpham);
      res.json({ message: 'Đã cập nhật thành công', results: true });
    } catch (error: any) {
      res.json({ message: error.message, results: false });
    }
  }
  async createSanPham(req: Request, res:Response): Promise<void>{
    try{
      const MaDanhMuc = req.body.MaDanhMuc; 
      const TenSanPham = req.body.TenSanPham;   
      const MoTaSanPham = req.body.MoTaSanPham; 
      const AnhDaiDien = req.body.AnhDaiDien; 
      const Mausac = req.body.Mausac; 
      const Giaban = req.body.Giaban; 
      const results = await this.sanphamService.createSanPham(MaDanhMuc,TenSanPham,MoTaSanPham,AnhDaiDien,Mausac,Giaban);
      res.json({message: 'Thêm thành công', results: true});
    }
    catch(error:any){
      res.json({message: error.message, results:false});
    }
  }

  async Deletesanpham(req: Request, res: Response): Promise<any>{
    try{
        const id = req.params.id;
        await this.sanphamService.deleteSanPham(id);
        res.json({message: 'Xoá thành công', data: true});
    }
    catch(err: any){
        throw new Error(err.message);
    }
}
// async TimKiem(req: Request, res: Response): Promise<void> {
//   try {
//     const TuKhoa = req.body.TuKhoa;
//     const loaihang = await this.danhMucService.timkiem(TuKhoa);
//     if (loaihang !== null) {
//       res.json(loaihang);
//     } else {
//       res.json({ message: 'Không tìm thấy kết quả' });
//     }
//   } catch (error: any) {
//     res.json({ message: error.message });
//   }
// }
}