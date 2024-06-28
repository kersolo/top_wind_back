import { Injectable } from '@nestjs/common';
import { CreateWishboneDto } from './dto/create-wishbone.dto';
import { UpdateWishboneDto } from './dto/update-wishbone.dto';

@Injectable()
export class WishboneService {
  create(createWishboneDto: CreateWishboneDto) {
    return 'This action adds a new wishbone';
  }

  findAll() {
    return `This action returns all wishbone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishbone`;
  }

  update(id: number, updateWishboneDto: UpdateWishboneDto) {
    return `This action updates a #${id} wishbone`;
  }

  remove(id: number) {
    return `This action removes a #${id} wishbone`;
  }
}
