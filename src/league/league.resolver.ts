import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeagueService } from './league.service';
import {
  CreateLeagueDTO,
  GetLeagueDTO,
  UpdateLeagueDTO,
  GetLeagueByNameDTO,
  GetLeagueByCountryDTO,
  DeleteLeagueDTO,
} from './dto';
import { League } from './model';

@Resolver('League')
export class LeagueResolver {
  constructor(private readonly leagueService: LeagueService) {}

  @Mutation(() => League)
  async createLeague(
    @Args('createLeagueDto') createLeagueDto: CreateLeagueDTO,
  ) {
    return this.leagueService.createLeague(createLeagueDto);
  }

  @Query(() => League, { nullable: true })
  async getLeagueById(@Args('getLeagueDTO') getLeagueDTO: GetLeagueDTO) {
    return this.leagueService.getLeagueById(getLeagueDTO);
  }

  @Query(() => [League])
  async getLeaguesByName(
    @Args('getLeagueByNameDTO') getLeagueByNameDTO: GetLeagueByNameDTO,
  ) {
    return this.leagueService.getLeaguesByName(getLeagueByNameDTO);
  }

  @Query(() => [League])
  async getLeaguesByCountry(
    @Args('getLeagueByCountryDTO') getLeagueByCountryDTO: GetLeagueByCountryDTO,
  ) {
    return this.leagueService.getLeaguesByCountry(getLeagueByCountryDTO);
  }

  @Mutation(() => League)
  async updateLeague(
    @Args('getLeagueDTO') getLeagueDTO: GetLeagueDTO,
    @Args('updateLeagueDto') updateLeagueDto: UpdateLeagueDTO,
  ) {
    return this.leagueService.updateLeague(getLeagueDTO, updateLeagueDto);
  }

  @Mutation(() => League)
  async deleteLeague(
    @Args('deleteLeagueDTO') deleteLeagueDTO: DeleteLeagueDTO,
  ) {
    return this.leagueService.deleteLeague(deleteLeagueDTO);
  }

  @Query(() => [League])
  async getAllLeagues() {
    return this.leagueService.getAllLeagues();
  }
}
