import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class UserRepository {
  constructor(private db: Database) { }  
  async GetUserByAccount(Email: string, Matkhau: string): Promise<any> {
    try {
      const sql = 'CALL GetUserByAccount(?,?)';
      const [results] = await this.db.query(sql, [Email,Matkhau]);      
      if (Array.isArray(results) && results.length > 0) {
        return results[0];
      } 
      return null; 
    } catch (error:any) {
      throw new Error( error.message);
    }
  } 
}