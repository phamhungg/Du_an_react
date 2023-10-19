import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { homeService } from '../services/homeService';

@injectable()
export class homeController {
  constructor(private homeService: homeService 
  ) { } 

  async GetSanphamByLoai(req: Request, res: Response): Promise<void>{
    try{
        const id = req.params.id;
        const data = await this.homeService.GetSanphamByLoai(id);
        if(data && data.length > 0){
            res.json(data);
        }
        else{
            res.json({message: 'Bản ghi không tồn tại'});
        }
    }
    catch(error: any){
        throw new Error("Thông điệp lỗi ở đây");

    }
}

}