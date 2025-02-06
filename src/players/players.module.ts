import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersResolver } from './players.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { TeamsService } from 'src/teams/teams.service';

@Module({
  imports: [TypeOrmModule.forFeature([Player]),TeamsService],
  providers: [PlayersService, PlayersResolver],
})
export class PlayersModule {}
