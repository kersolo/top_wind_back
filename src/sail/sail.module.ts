import { Module } from '@nestjs/common';
import { SailService } from './sail.service';
import { SailController } from './sail.controller';

@Module({
  controllers: [SailController],
  providers: [SailService],
})
export class SailModule {}
