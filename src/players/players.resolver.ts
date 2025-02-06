import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';
import { createPlayerDTO } from './dto';
import { Team } from 'src/teams/entities/team.entity';

@Resolver((of) => Player)
export class PlayersResolver {
  constructor(private playerService: PlayersService) {}

  @Query((returns) => Player)
  getPlayer(@Args('id') id: number): Promise<Player> {
    return this.playerService.findOne(id);
  }
  @Query((returns) => [Player])
  players(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Mutation((returns) => Player)
  createPlayer(@Args('player') player: createPlayerDTO): Promise<Player> {
    return this.playerService.createPlayer(player);
  }

  @Query((returns) => Team)
  getTeam(@Parent() player:Player): Promise<Team> {
    return this.playerService.getTeam(player.teamId);
  }
}
