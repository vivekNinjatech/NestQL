import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlModule } from './graphql/graphql.module';
import { AdminModule } from './admin/admin.module';
import { LeagueModule } from './league/league.module';
import { NationalTeamModule } from './national-team/national-team.module';
import { PlayerModule } from './player/player.module';
import { ClubModule } from './club/club.module';

@Module({
  imports: [
    PrismaModule,
    GraphqlModule,
    AdminModule,
    ClubModule,
    PlayerModule,
    NationalTeamModule,
    LeagueModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
