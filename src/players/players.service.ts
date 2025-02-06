import { Injectable } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPlayerDTO } from './dto';
import { Team } from 'src/teams/entities/team.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
    @InjectRepository(Team) private teamRepository: Repository<Team>,
  ) {}
  async findAll(): Promise<Player[]> {
    return this.playerRepository.find(); // SELECT * FROM players
  }

  async findOne(id: number): Promise<Player> {
    return this.playerRepository.findOneByOrFail({ id });
  }
  async createPlayer(player: createPlayerDTO): Promise<Player> {
    const newPlayer = this.playerRepository.create(player); // INSERT INTO players
    return this.playerRepository.save(newPlayer);
  }
  async getTeam(ownerId: number): Promise<Team> {
    return this.teamRepository.findOneByOrFail({ id: ownerId });
  }
}
