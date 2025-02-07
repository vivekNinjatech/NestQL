import { Injectable } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPlayerDTO } from './dto';
import { Team } from 'src/teams/entities/team.entity';
import { TeamsService } from 'src/teams/teams.service';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
    private readonly teamsService: TeamsService,
  ) {}
  async findAll(): Promise<Player[]> {
    return this.playerRepository.find(); // SELECT * FROM players
  }

  async findOne(id: number): Promise<Player> {
    return this.playerRepository.findOneByOrFail({ id });
  }
  async createPlayer(player: createPlayerDTO): Promise<Player> {
    const newPlayer = this.playerRepository.create(player);
    return this.playerRepository.save(newPlayer);
  }
  async getTeam(ownerId: number): Promise<Team> {
    return this.teamsService.findOne(ownerId);
  }
}
