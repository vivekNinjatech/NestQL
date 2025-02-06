import { Injectable } from '@nestjs/common';
import { CreateTeamInput } from './dto/create-team.input';
import { UpdateTeamInput } from './dto/update-team.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private teamRepository: Repository<Team>,
  ) {}
  async create(createTeamInput: CreateTeamInput) {
    const newTeam = this.teamRepository.create(createTeamInput);
    return this.teamRepository.save(newTeam);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async findOne(id: number): Promise<Team> {
    return this.teamRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateTeamInput: UpdateTeamInput): Promise<Team> {
    const team = await this.teamRepository.findOneByOrFail({ id });
    return this.teamRepository.save({ ...team, ...updateTeamInput });
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
