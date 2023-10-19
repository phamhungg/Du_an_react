import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class DanhMucRepository {
  danhmucService: any;
  constructor(private db: Database) { }  

   async getDanhMucById(id: string): Promise<any> {
    try {
      const sql = 'CALL GetLoaiHangById(?)';
      const [results] = await this.db.query(sql, [id]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  }
  async getDanhMucAll(): Promise<any> {
    try {
      const sql = 'CALL getLoaiHangAll()';
      const [results] = await this.db.query(sql, []);
      return results;       
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 

  async updateDanhMuc(danhmuc: { MaDanhMuc: string, TenDanhMuc: string }): Promise<boolean> {
    try {
      const sql = 'CALL UpdateDanhMuc(?,?)';
      await this.db.query(sql, [danhmuc.MaDanhMuc, danhmuc.TenDanhMuc]);
      return true;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  
  

  async CreateDanhMuc(TenDanhMuc: string): Promise<any> {
    try {
      const query = 'CALL CreateLoaiHang(?)';
      const value = [TenDanhMuc];
      await this.db.query(query, value);
    }
    catch {
      throw new Error;
    }
  }

async Deletedanhmuc(id: string): Promise<any> {
    try {
      const sql = 'CALL DeleteLoaiHang(?)';
     await this.db.query(sql, [id]);      
      return true;
    } catch (error:any) {
      throw new Error( error.message);
    }
  }

  async timkiem(TuKhoa: string): Promise<any | null> {
    try {
      const sql = 'CALL timkem(?)';
      const [results] = await this.db.query(sql, [TuKhoa]);
      if (results) {
        return results;
      } else {
        return null;
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}