import { Module } from '@nestjs/common';
import { PlayerResolver } from './player.resolver';
import { PlayerService } from './player.service';

@Module({
  providers: [PlayerService, PlayerResolver],
})
export class PlayerModule {}
