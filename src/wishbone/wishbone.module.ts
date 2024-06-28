import { Module } from '@nestjs/common';
import { WishboneService } from './wishbone.service';
import { WishboneController } from './wishbone.controller';

@Module({
  controllers: [WishboneController],
  providers: [WishboneService],
})
export class WishboneModule {}
