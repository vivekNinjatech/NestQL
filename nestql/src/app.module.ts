import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlModule } from './graphql/graphql.module';
import { AdminModule } from './admin/admin.module';
import { ClubModule } from './club/club.module';
import { LeagueModule } from './league/league.module';
import { NationalTeamModule } from './national-team/national-team.module';
import { PlayerModule } from './player/player.module';
import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';
import { ClubModule } from './club/club.module';

@Module({
  imports: [PrismaModule, GraphqlModule, AdminModule, ClubModule, PlayersModule, ClubsModule, PlayerModule, NationalTeamModule, LeagueModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
