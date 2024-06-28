import { Injectable } from '@nestjs/common';
import { CreateMastDto } from './dto/create-mast.dto';
import { UpdateMastDto } from './dto/update-mast.dto';

@Injectable()
export class MastService {
  create(createMastDto: CreateMastDto) {
    return 'This action adds a new mast';
  }

  findAll() {
    return `This action returns all mast`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mast`;
  }

  update(id: number, updateMastDto: UpdateMastDto) {
    return `This action updates a #${id} mast`;
  }

  remove(id: number) {
    return `This action removes a #${id} mast`;
  }
}
