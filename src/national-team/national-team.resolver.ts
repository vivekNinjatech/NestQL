import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NationalTeamService } from './national-team.service';
import {
  CreateNationalTeamDTO,
  GetNationalTeamDTO,
  UpdateNationalTeamDTO,
  GetNationalTeamByNameDTO,
  GetNationalTeamByCountryDTO,
  DeleteNationalTeamDTO,
} from './dto';
import { NationalTeam } from './model';

@Resolver('NationalTeam')
export class NationalTeamResolver {
  constructor(private readonly nationalTeamService: NationalTeamService) {}

  @Mutation(() => NationalTeam)
  async createNationalTeam(
    @Args('createNationalTeamDto') createNationalTeamDto: CreateNationalTeamDTO,
  ) {
    return this.nationalTeamService.createNationalTeam(createNationalTeamDto);
  }

  @Query(() => NationalTeam, { nullable: true })
  async getNationalTeamById(
    @Args('getNationalTeamDTO') getNationalTeamDTO: GetNationalTeamDTO,
  ) {
    return this.nationalTeamService.getNationalTeamById(getNationalTeamDTO);
  }

  @Query(() => [NationalTeam])
  async getNationalTeamsByName(
    @Args('getNationalTeamByNameDTO')
    getNationalTeamByNameDTO: GetNationalTeamByNameDTO,
  ) {
    return this.nationalTeamService.getNationalTeamsByName(
      getNationalTeamByNameDTO,
    );
  }

  @Query(() => [NationalTeam])
  async getNationalTeamsByCountry(
    @Args('getNationalTeamByCountryDTO')
    getNationalTeamByCountryDTO: GetNationalTeamByCountryDTO,
  ) {
    return this.nationalTeamService.getNationalTeamsByCountry(
      getNationalTeamByCountryDTO,
    );
  }

  @Mutation(() => NationalTeam)
  async updateNationalTeam(
    @Args('getNationalTeamDTO') getNationalTeamDTO: GetNationalTeamDTO,
    @Args('updateNationalTeamDto') updateNationalTeamDto: UpdateNationalTeamDTO,
  ) {
    return this.nationalTeamService.updateNationalTeam(
      getNationalTeamDTO,
      updateNationalTeamDto,
    );
  }

  @Mutation(() => NationalTeam)
  async deleteNationalTeam(
    @Args('deleteNationalTeamDTO') deleteNationalTeamDTO: DeleteNationalTeamDTO,
  ) {
    return this.nationalTeamService.deleteNationalTeam(deleteNationalTeamDTO);
  }
}
