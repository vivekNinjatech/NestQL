import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreatePlayerDTO,
  UpdatePlayerDTO,
  GetPlayerDTO,
  DeletePlayerDTO,
  GetPlayerByNameDTO,
  GetPlayerByNationalityDTO,
  GetPlayerByClubIdDTO,
} from './dto';

@Injectable()
export class PlayerService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPlayer(createPlayerDto: CreatePlayerDTO) {
    try {
      return await this.prismaService.player.create({
        data: createPlayerDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to create player',
        error.message,
      );
    }
  }

  async getPlayerById(getPlayerDTO: GetPlayerDTO) {
    try {
      const player = await this.prismaService.player.findUnique({
        where: { id: getPlayerDTO.id },
      });
      if (!player) {
        throw new NotFoundException(
          `Player with ID ${getPlayerDTO.id} not found`,
        );
      }
      return player;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve player',
        error.message,
      );
    }
  }

  async getPlayersByName(getPlayerByNameDTO: GetPlayerByNameDTO) {
    try {
      const players = await this.prismaService.player.findMany({
        where: { name: getPlayerByNameDTO.name },
      });
      if (!players) {
        throw new NotFoundException(
          `Players with name ${getPlayerByNameDTO.name} not found`,
        );
      }
      return players;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve players',
        error.message,
      );
    }
  }

  async getPlayersByNationality(
    getPlayerByNationalityDTO: GetPlayerByNationalityDTO,
  ) {
    try {
      const players = await this.prismaService.player.findMany({
        where: { nationality: getPlayerByNationalityDTO.nationality },
      });
      if (!players) {
        throw new NotFoundException(
          `Players with nationality ${getPlayerByNationalityDTO.nationality} not found`,
        );
      }
      return players;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve players',
        error.message,
      );
    }
  }

  async getPlayersByClubId(getPlayerByClubIdDTO: GetPlayerByClubIdDTO) {
    try {
      const players = await this.prismaService.player.findMany({
        where: { clubId: getPlayerByClubIdDTO.clubId },
      });
      if (!players) {
        throw new NotFoundException(
          `Players with club ID ${getPlayerByClubIdDTO.clubId} not found`,
        );
      }
      return players;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to retrieve players',
        error.message,
      );
    }
  }

  async updatePlayer(
    getPlayerDTO: GetPlayerDTO,
    updatePlayerDto: UpdatePlayerDTO,
  ) {
    try {
      const player = await this.prismaService.player.findUnique({
        where: { id: getPlayerDTO.id },
      });
      if (!player) {
        throw new NotFoundException(
          `Player with ID ${getPlayerDTO.id} not found`,
        );
      }
      return await this.prismaService.player.update({
        where: { id: getPlayerDTO.id },
        data: updatePlayerDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to update player',
        error.message,
      );
    }
  }

  async deletePlayer(deletePlayerDTO: DeletePlayerDTO) {
    try {
      const player = await this.prismaService.player.findUnique({
        where: { id: deletePlayerDTO.id },
      });
      if (!player) {
        throw new NotFoundException(
          `Player with ID ${deletePlayerDTO.id} not found`,
        );
      }
      return await this.prismaService.player.delete({
        where: { id: deletePlayerDTO.id },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to delete player',
        error.message,
      );
    }
  }
}
