import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LeaguesService } from './leagues.service';
import { League } from './entities/league.entity';
import { CreateLeagueInput } from './dto/create-league.input';
import { UpdateLeagueInput } from './dto/update-league.input';

@Resolver(() => League)
export class LeaguesResolver {
  constructor(private readonly leaguesService: LeaguesService) {}

  @Mutation(() => League)
  createLeague(
    @Args('createLeagueInput') createLeagueInput: CreateLeagueInput,
  ) {
    return this.leaguesService.create(createLeagueInput);
  }

  @Query(() => [League], { name: 'leagues' })
  findAll() {
    return this.leaguesService.findAll();
  }

  @Query(() => League, { name: 'league' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.leaguesService.findOne(id);
  }

  @Mutation(() => League)
  updateLeague(
    @Args('updateLeagueInput') updateLeagueInput: UpdateLeagueInput,
  ) {
    return this.leaguesService.update(updateLeagueInput.id, updateLeagueInput);
  }

  @Mutation(() => League)
  removeLeague(@Args('id', { type: () => Int }) id: number) {
    return this.leaguesService.remove(id);
  }
}
