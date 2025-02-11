import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateLeagueDTO,
  GetLeagueDTO,
  UpdateLeagueDTO,
  GetLeagueByNameDTO,
  GetLeagueByCountryDTO,
  DeleteLeagueDTO,
} from './dto';

@Injectable()
export class LeagueService {
  constructor(private readonly prismaService: PrismaService) {}

  async createLeague(createLeagueDto: CreateLeagueDTO) {
    try {
      return await this.prismaService.league.create({
        data: createLeagueDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to create league',
        error.message,
      );
    }
  }

  async getLeagueById(getLeagueDTO: GetLeagueDTO) {
    try {
      const league = await this.prismaService.league.findUnique({
        where: { id: getLeagueDTO.id },
      });
      if (!league) {
        throw new NotFoundException(
          `League with ID ${getLeagueDTO.id} not found`,
        );
      }
      return league;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve league',
        error.message,
      );
    }
  }

  async getLeaguesByName(getLeagueByNameDTO: GetLeagueByNameDTO) {
    try {
      const leagues = await this.prismaService.league.findMany({
        where: { name: getLeagueByNameDTO.name },
      });
      if (!leagues) {
        throw new NotFoundException(
          `Leagues with name ${getLeagueByNameDTO.name} not found`,
        );
      }
      return leagues;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve leagues',
        error.message,
      );
    }
  }

  async getLeaguesByCountry(getLeagueByCountryDTO: GetLeagueByCountryDTO) {
    try {
      const leagues = await this.prismaService.league.findMany({
        where: { country: getLeagueByCountryDTO.country },
      });
      if (!leagues) {
        throw new NotFoundException(
          `Leagues in country ${getLeagueByCountryDTO.country} not found`,
        );
      }
      return leagues;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve leagues',
        error.message,
      );
    }
  }

  async updateLeague(
    getLeagueDTO: GetLeagueDTO,
    updateLeagueDto: UpdateLeagueDTO,
  ) {
    try {
      const league = await this.prismaService.league.findUnique({
        where: { id: getLeagueDTO.id },
      });
      if (!league) {
        throw new NotFoundException(
          `League with ID ${getLeagueDTO.id} not found`,
        );
      }
      return await this.prismaService.league.update({
        where: { id: getLeagueDTO.id },
        data: updateLeagueDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to update league',
        error.message,
      );
    }
  }

  async deleteLeague(deleteLeagueDTO: DeleteLeagueDTO) {
    try {
      const league = await this.prismaService.league.findUnique({
        where: { id: deleteLeagueDTO.id },
      });
      if (!league) {
        throw new NotFoundException(
          `League with ID ${deleteLeagueDTO.id} not found`,
        );
      }
      return await this.prismaService.league.delete({
        where: { id: deleteLeagueDTO.id },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to delete league',
        error.message,
      );
    }
  }

  async getAllLeagues() {
    try {
      return await this.prismaService.league.findMany();
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve leagues',
        error.message,
      );
    }
  }
}
