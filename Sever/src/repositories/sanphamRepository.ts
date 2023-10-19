import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class sanphamRepository {
  sanphamService: any;
  constructor(private db: Database) { }  

   async getSanPhamById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetsanphamById(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }

  
  async getSanPhamAll(): Promise<any> {
    try {
      const sql = 'CALL GetsanphamAll()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateSanPham(sanpham: { MaSanPham: string, MaDanhMuc: string, TenSanPham: string, MoTaSanPham: string, AnhDaiDien: string, Mausac: string, Giaban: string }): Promise<boolean> {
    try {
      const sql = 'CALL UpdateSanPham(?,?,?,?,?,?,?)';
      await this.db.query(sql, [sanpham.MaSanPham, sanpham.MaDanhMuc,sanpham.TenSanPham,sanpham.MoTaSanPham,sanpham.AnhDaiDien,sanpham.Mausac,sanpham.Giaban]);
      return true;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  
  

  async CreateSanPham(MaDanhMuc: string, TenSanPham: string,MoTaSanPham: string  ,AnhDaiDien: string, Mausac: string,Giaban: string): Promise<any> {
    try {
      const query = 'CALL CreateSanpham(?,?,?,?,?,?)';
      const value = [MaDanhMuc,TenSanPham,MoTaSanPham,AnhDaiDien,Mausac,Giaban];
      await this.db.query(query, value);
    }
    catch {
      throw new Error;
    }
  }

async Deletesanpham(id: string): Promise<any> {
    try {
      const sql = 'CALL DeleteSanpham(?)';
     await this.db.query(sql, [id]);      
      return true;
    } catch (error:any) {
      throw new Error( error.message);
    }
  }

//   async timkiem(TuKhoa: string): Promise<any | null> {
//     try {
//       const sql = 'CALL timkem(?)';
//       const [results] = await this.db.query(sql, [TuKhoa]);
//       if (results) {
//         return results;
//       } else {
//         return null;
//       }
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   }
}