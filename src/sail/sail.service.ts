import { Injectable } from '@nestjs/common';
import { CreateSailDto } from './dto/create-sail.dto';
import { UpdateSailDto } from './dto/update-sail.dto';

@Injectable()
export class SailService {
  create(createSailDto: CreateSailDto) {
    return 'This action adds a new sail';
  }

  findAll() {
    return `This action returns all sail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sail`;
  }

  update(id: number, updateSailDto: UpdateSailDto) {
    return `This action updates a #${id} sail`;
  }

  remove(id: number) {
    return `This action removes a #${id} sail`;
  }
}
