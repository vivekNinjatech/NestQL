import { Module } from '@nestjs/common';
import { NationalTeamService } from './national-team.service';
import { NationalTeamResolver } from './national-team.resolver';

@Module({
  providers: [NationalTeamService, NationalTeamResolver],
})
export class NationalTeamModule {}
