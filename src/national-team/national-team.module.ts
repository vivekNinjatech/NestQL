import { Module } from '@nestjs/common';
import { NationalTeamService } from './national-team.service';
import { NationalTeamResolver } from './national-team.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [NationalTeamService, NationalTeamResolver],
  imports: [PrismaModule],
})
export class NationalTeamModule {}
