import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishboneService } from './wishbone.service';
import { CreateWishboneDto } from './dto/create-wishbone.dto';
import { UpdateWishboneDto } from './dto/update-wishbone.dto';

@Controller('wishbone')
export class WishboneController {
  constructor(private readonly wishboneService: WishboneService) {}

  @Post()
  create(@Body() createWishboneDto: CreateWishboneDto) {
    return this.wishboneService.create(createWishboneDto);
  }

  @Get()
  findAll() {
    return this.wishboneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishboneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishboneDto: UpdateWishboneDto) {
    return this.wishboneService.update(+id, updateWishboneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishboneService.remove(+id);
  }
}
