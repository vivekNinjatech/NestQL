import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlayerService } from './player.service';
import {
  CreatePlayerDTO,
  UpdatePlayerDTO,
  GetPlayerDTO,
  DeletePlayerDTO,
  GetPlayerByNameDTO,
  GetPlayerByNationalityDTO,
  GetPlayerByClubIdDTO,
} from './dto';
import { Player } from './model';

@Resolver('Player')
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Mutation(() => Player)
  async createPlayer(
    @Args('createPlayerDto') createPlayerDto: CreatePlayerDTO,
  ) {
    return this.playerService.createPlayer(createPlayerDto);
  }

  @Query(() => Player, { nullable: true })
  async getPlayerById(@Args('getPlayerDTO') getPlayerDTO: GetPlayerDTO) {
    return this.playerService.getPlayerById(getPlayerDTO);
  }

  @Query(() => [Player])
  async getPlayersByName(
    @Args('getPlayerByNameDTO') getPlayerByNameDTO: GetPlayerByNameDTO,
  ) {
    return this.playerService.getPlayersByName(getPlayerByNameDTO);
  }

  @Query(() => [Player])
  async getPlayersByNationality(
    @Args('getPlayerByNationalityDTO')
    getPlayerByNationalityDTO: GetPlayerByNationalityDTO,
  ) {
    return this.playerService.getPlayersByNationality(
      getPlayerByNationalityDTO,
    );
  }

  @Query(() => [Player])
  async getPlayersByClubId(
    @Args('getPlayerByClubIdDTO') getPlayerByClubIdDTO: GetPlayerByClubIdDTO,
  ) {
    return this.playerService.getPlayersByClubId(getPlayerByClubIdDTO);
  }

  @Mutation(() => Player)
  async updatePlayer(
    @Args('getPlayerDTO') getPlayerDTO: GetPlayerDTO,
    @Args('updatePlayerDto') updatePlayerDto: UpdatePlayerDTO,
  ) {
    return this.playerService.updatePlayer(getPlayerDTO, updatePlayerDto);
  }

  @Mutation(() => Player)
  async deletePlayer(
    @Args('deletePlayerDTO') deletePlayerDTO: DeletePlayerDTO,
  ) {
    return this.playerService.deletePlayer(deletePlayerDTO);
  }
}
