import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPlayerDTO } from './dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}
  async findAll(): Promise<Player[]> {
    return this.playerRepository.find(); // SELECT * FROM players
  }

  async createPlayer(player: createPlayerDTO): Promise<Player> {
    const newPlayer = this.playerRepository.create(player); // INSERT INTO players
    return this.playerRepository.save(newPlayer);
  }
}
