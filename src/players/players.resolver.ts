import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlayersService } from './players.service';
import { Player } from './player.entity';
import { createPlayerDTO } from './dto';

@Resolver((of) => Player)
export class PlayersResolver {
  constructor(private playerService: PlayersService) {}

  @Query((returns) => [Player])
  players(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Mutation((returns) => Player)
  createPlayer(@Args('player') player: createPlayerDTO): Promise<Player> {
    return this.playerService.createPlayer(player);
  }
}
