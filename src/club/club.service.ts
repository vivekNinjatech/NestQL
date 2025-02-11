import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  CreateClubDTO,
  DeleteClubDTO,
  GetClubByIdDTO,
  GetClubByNameDTO,
  GetClubByStadiumDTO,
  UpdateClubDTO,
  GetClubByFoundedYearDTO,
  GetClubByLeagueIdDTO,
  GetClubByManagerDTO,
} from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClubService {
  constructor(private readonly prismaService: PrismaService) {}

  async createClub(createClubDto: CreateClubDTO) {
    try {
      return await this.prismaService.club.create({
        data: createClubDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to create club',
        error.message,
      );
    }
  }

  async getClub(getClubDTO: GetClubByIdDTO) {
    try {
      const club = await this.prismaService.club.findUnique({
        where: { id: getClubDTO.id },
      });
      if (!club) {
        throw new NotFoundException(`Club with ID ${getClubDTO.id} not found`);
      }
      return club;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve club',
        error.message,
      );
    }
  }

  async updateClub(updateClubDto: UpdateClubDTO) {
    try {
      const club = await this.prismaService.club.findUnique({
        where: { id: updateClubDto.id },
      });
      if (!club) {
        throw new NotFoundException(
          `Club with ID ${updateClubDto.id} not found`,
        );
      }
      return await this.prismaService.club.update({
        where: { id: updateClubDto.id },
        data: updateClubDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to update club',
        error.message,
      );
    }
  }

  async deleteClub(deleteClubDto: DeleteClubDTO) {
    try {
      const club = await this.prismaService.club.findUnique({
        where: { id: deleteClubDto.id },
      });
      if (!club) {
        throw new NotFoundException(
          `Club with ID ${deleteClubDto.id} not found`,
        );
      }
      return await this.prismaService.club.delete({
        where: { id: deleteClubDto.id },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to delete club',
        error.message,
      );
    }
  }

  async getAllClubs() {
    try {
      return await this.prismaService.club.findMany();
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve clubs',
        error.message,
      );
    }
  }

  async getClubByName(getClubByNameDTO: GetClubByNameDTO) {
    try {
      const club = await this.prismaService.club.findMany({
        where: { name: getClubByNameDTO.name },
      });
      if (!club) {
        throw new NotFoundException(
          `Club with name ${getClubByNameDTO.name} not found`,
        );
      }
      return club;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve club',
        error.message,
      );
    }
  }

  async getClubByStadium(getClubByStadiumByNameDTO: GetClubByStadiumDTO) {
    try {
      const club = await this.prismaService.club.findMany({
        where: { stadium: getClubByStadiumByNameDTO.stadium },
      });
      if (!club) {
        throw new NotFoundException(
          `Club with stadium ${getClubByStadiumByNameDTO.stadium} not found`,
        );
      }
      return club;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve club',
        error.message,
      );
    }
  }

  async getClubByLeagueId(getClubByLeagueIdDTO: GetClubByLeagueIdDTO) {
    try {
      const clubs = await this.prismaService.club.findMany({
        where: { leagueId: getClubByLeagueIdDTO.leagueId },
      });
      if (!clubs) {
        throw new NotFoundException(
          `Clubs with league ID ${getClubByLeagueIdDTO.leagueId} not found`,
        );
      }
      return clubs;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve clubs',
        error.message,
      );
    }
  }

  async getClubByManager(getClubByManagerDTO: GetClubByManagerDTO) {
    try {
      const clubs = await this.prismaService.club.findMany({
        where: { manager: getClubByManagerDTO.manager },
      });
      if (!clubs) {
        throw new NotFoundException(
          `Clubs with manager ${getClubByManagerDTO.manager} not found`,
        );
      }
      return clubs;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve clubs',
        error.message,
      );
    }
  }

  async getClubByFoundedYear(getClubByFoundedYearDTO: GetClubByFoundedYearDTO) {
    try {
      const clubs = await this.prismaService.club.findMany({
        where: { founded: getClubByFoundedYearDTO.founded },
      });
      if (!clubs) {
        throw new NotFoundException(
          `Clubs founded in year ${getClubByFoundedYearDTO.founded} not found`,
        );
      }
      return clubs;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve clubs',
        error.message,
      );
    }
  }
}
