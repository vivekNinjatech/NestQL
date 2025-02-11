import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClubService } from './club.service';
import {
  CreateClubDTO,
  DeleteClubDTO,
  GetClubByFoundedYearDTO,
  GetClubByIdDTO,
  GetClubByLeagueIdDTO,
  GetClubByManagerDTO,
  GetClubByNameDTO,
  GetClubByStadiumDTO,
  UpdateClubDTO,
} from './dto';

@Resolver('Club')
export class ClubResolver {
  constructor(private readonly clubService: ClubService) {}

  @Mutation(() => String)
  async createClub(@Args('createClubDto') createClubDto: CreateClubDTO) {
    return this.clubService.createClub(createClubDto);
  }

  @Query(() => String, { nullable: true })
  async getClub(@Args('getClubByIdDto') getClubDTO: GetClubByIdDTO) {
    return this.clubService.getClub(getClubDTO);
  }

  @Mutation(() => String)
  async updateClub(@Args('updateClubDto') updateClubDto: UpdateClubDTO) {
    return this.clubService.updateClub(updateClubDto);
  }

  @Mutation(() => String)
  async deleteClub(@Args('deleteClubDto') deleteClubDto: DeleteClubDTO) {
    return this.clubService.deleteClub(deleteClubDto);
  }

  @Query(() => [String])
  async getAllClubs() {
    return this.clubService.getAllClubs();
  }

  @Query(() => [String])
  async getClubByName(
    @Args('getClubByNameDto') getClubByNameDto: GetClubByNameDTO,
  ) {
    return this.clubService.getClubByName(getClubByNameDto);
  }

  @Query(() => [String])
  async getClubByStadium(
    @Args('getClubByStadiumDto') getClubByStadiumDto: GetClubByStadiumDTO,
  ) {
    return this.clubService.getClubByStadium(getClubByStadiumDto);
  }

  @Query(() => [String])
  async getClubByLeagueId(
    @Args('getClubByLeagueIdDto') getClubByLeagueIdDto: GetClubByLeagueIdDTO,
  ) {
    return this.clubService.getClubByLeagueId(getClubByLeagueIdDto);
  }

  @Query(() => [String])
  async getClubByManager(
    @Args('getClubByManagerDto') getClubByManagerDto: GetClubByManagerDTO,
  ) {
    return this.clubService.getClubByManager(getClubByManagerDto);
  }

  @Query(() => [String])
  async getClubByFoundedYear(
    @Args('getClubByFoundedYearDto')
    getClubByFoundedYearDto: GetClubByFoundedYearDTO,
  ) {
    return this.clubService.getClubByFoundedYear(getClubByFoundedYearDto);
  }
}
