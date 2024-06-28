import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { BoardModule } from './board/board.module';
import { SailModule } from './sail/sail.module';
import { MastModule } from './mast/mast.module';
import { WishboneModule } from './wishbone/wishbone.module';
import { PrismaModule } from 'prisma/prisma.module';


@Module({
  imports: [PrismaModule, UserModule, ProfileModule, BoardModule, SailModule, MastModule, WishboneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
