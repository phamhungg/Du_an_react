import { homeRepository } from './../repositories/homeRepository';
import { injectable } from 'tsyringe';


@injectable()
export class homeService {
  constructor(private homeRepository: homeRepository
  ) {}

  async GetSanphamByLoai(id: string): Promise<any>{
    return this.homeRepository.GetSanphamByLoai(id);
}

}