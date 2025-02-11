import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateNationalTeamDTO,
  GetNationalTeamDTO,
  UpdateNationalTeamDTO,
  GetNationalTeamByNameDTO,
  GetNationalTeamByCountryDTO,
  DeleteNationalTeamDTO,
} from './dto';

@Injectable()
export class NationalTeamService {
  constructor(private readonly prismaService: PrismaService) {}

  async createNationalTeam(createNationalTeamDto: CreateNationalTeamDTO) {
    try {
      return await this.prismaService.nationalTeam.create({
        data: createNationalTeamDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to create national team',
        error.message,
      );
    }
  }

  async getNationalTeamById(getNationalTeamDTO: GetNationalTeamDTO) {
    try {
      const nationalTeam = await this.prismaService.nationalTeam.findUnique({
        where: { id: getNationalTeamDTO.id },
      });
      if (!nationalTeam) {
        throw new NotFoundException(
          `National team with ID ${getNationalTeamDTO.id} not found`,
        );
      }
      return nationalTeam;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve national team',
        error.message,
      );
    }
  }

  async getNationalTeamsByName(
    getNationalTeamByNameDTO: GetNationalTeamByNameDTO,
  ) {
    try {
      const nationalTeams = await this.prismaService.nationalTeam.findMany({
        where: { name: getNationalTeamByNameDTO.name },
      });
      if (!nationalTeams) {
        throw new NotFoundException(
          `National teams with name ${getNationalTeamByNameDTO.name} not found`,
        );
      }
      return nationalTeams;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve national teams',
        error.message,
      );
    }
  }

  async getNationalTeamsByCountry(
    getNationalTeamByCountryDTO: GetNationalTeamByCountryDTO,
  ) {
    try {
      const nationalTeams = await this.prismaService.nationalTeam.findMany({
        where: { country: getNationalTeamByCountryDTO.country },
      });
      if (!nationalTeams) {
        throw new NotFoundException(
          `National teams in country ${getNationalTeamByCountryDTO.country} not found`,
        );
      }
      return nationalTeams;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve national teams',
        error.message,
      );
    }
  }

  async updateNationalTeam(
    getNationalTeamDTO: GetNationalTeamDTO,
    updateNationalTeamDto: UpdateNationalTeamDTO,
  ) {
    try {
      const nationalTeam = await this.prismaService.nationalTeam.findUnique({
        where: { id: getNationalTeamDTO.id },
      });
      if (!nationalTeam) {
        throw new NotFoundException(
          `National team with ID ${getNationalTeamDTO.id} not found`,
        );
      }
      return await this.prismaService.nationalTeam.update({
        where: { id: getNationalTeamDTO.id },
        data: updateNationalTeamDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to update national team',
        error.message,
      );
    }
  }

  async deleteNationalTeam(deleteNationalTeamDTO: DeleteNationalTeamDTO) {
    try {
      const nationalTeam = await this.prismaService.nationalTeam.findUnique({
        where: { id: deleteNationalTeamDTO.id },
      });
      if (!nationalTeam) {
        throw new NotFoundException(
          `National team with ID ${deleteNationalTeamDTO.id} not found`,
        );
      }
      return await this.prismaService.nationalTeam.delete({
        where: { id: deleteNationalTeamDTO.id },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to delete national team',
        error.message,
      );
    }
  }
}
