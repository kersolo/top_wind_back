import { Module } from '@nestjs/common';
import { MastService } from './mast.service';
import { MastController } from './mast.controller';

@Module({
  controllers: [MastController],
  providers: [MastService],
})
export class MastModule {}
