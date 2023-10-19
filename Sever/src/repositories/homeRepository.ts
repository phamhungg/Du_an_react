import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class homeRepository {
  homeService: any;
  constructor(private db: Database) { }  

  async GetSanphamByLoai(id: string): Promise<any>{
    try{
        const sql = 'CALL getspbyloai(?)';
        const [results] = await this.db.query(sql, [id]);
        return results;
    }
    catch(Error: any){
        throw new Error;
    }
}


}