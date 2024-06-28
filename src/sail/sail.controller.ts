import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SailService } from './sail.service';
import { CreateSailDto } from './dto/create-sail.dto';
import { UpdateSailDto } from './dto/update-sail.dto';

@Controller('sail')
export class SailController {
  constructor(private readonly sailService: SailService) {}

  @Post()
  create(@Body() createSailDto: CreateSailDto) {
    return this.sailService.create(createSailDto);
  }

  @Get()
  findAll() {
    return this.sailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSailDto: UpdateSailDto) {
    return this.sailService.update(+id, updateSailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sailService.remove(+id);
  }
}
