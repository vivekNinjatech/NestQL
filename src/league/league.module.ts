import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';
import { LeagueResolver } from './league.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [LeagueService, LeagueResolver],
  imports: [PrismaModule],
})
export class LeagueModule {}
