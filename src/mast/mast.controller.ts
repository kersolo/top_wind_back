import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MastService } from './mast.service';
import { CreateMastDto } from './dto/create-mast.dto';
import { UpdateMastDto } from './dto/update-mast.dto';

@Controller('mast')
export class MastController {
  constructor(private readonly mastService: MastService) {}

  @Post()
  create(@Body() createMastDto: CreateMastDto) {
    return this.mastService.create(createMastDto);
  }

  @Get()
  findAll() {
    return this.mastService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mastService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMastDto: UpdateMastDto) {
    return this.mastService.update(+id, updateMastDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mastService.remove(+id);
  }
}
