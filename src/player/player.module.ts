import { Module } from '@nestjs/common';
import { PlayerResolver } from './player.resolver';
import { PlayerService } from './player.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PlayerService, PlayerResolver],
  imports: [PrismaModule],
})
export class PlayerModule {}
