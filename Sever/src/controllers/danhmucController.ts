import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { DanhMucService } from '../services/danhmucService';

@injectable()
export class DanhMucController {
  constructor(private danhMucService: DanhMucService 
  ) { } 
  
  async getBranchById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.danhMucService.getDanhMucById(id);   
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getDanhMucAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.danhMucService.getDanhMucAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updateDanhMuc(req: Request, res: Response): Promise<void> {
    try {
      const danhmuc = req.body as { MaDanhMuc: string, TenDanhMuc: string  };
      const results = await this.danhMucService.updateDanhMuc(danhmuc);
      res.json({ message: 'Đã cập nhật thành công', results: true });
    } catch (error: any) {
      res.json({ message: error.message, results: false });
    }
  }
  async createDanhMuc(req: Request, res:Response): Promise<void>{
    try{
      
      const TenDanhMuc = req.body.TenDanhMuc;   
      const results = await this.danhMucService.createDanhMuc(TenDanhMuc);
      res.json({message: 'Thêm thành công', results: true});
    }
    catch(error:any){
      res.json({message: error.message, results:false});
    }
  }

  async Deletedanhmuc(req: Request, res: Response): Promise<any>{
    try{
        const id = req.params.id;
        await this.danhMucService.deleteDanhMuc(id);
        res.json({message: 'Xoá thành công', data: true});
    }
    catch(err: any){
        throw new Error(err.message);
    }
}
async TimKiem(req: Request, res: Response): Promise<void> {
  try {
    const TuKhoa = req.body.TuKhoa;
    const loaihang = await this.danhMucService.timkiem(TuKhoa);
    if (loaihang !== null) {
      res.json(loaihang);
    } else {
      res.json({ message: 'Không tìm thấy kết quả' });
    }
  } catch (error: any) {
    res.json({ message: error.message });
  }
}
}