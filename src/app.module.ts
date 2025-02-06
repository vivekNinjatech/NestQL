import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver } from '@nestjs/apollo';
import { PlayersModule } from './players/players.module';
import { join } from 'path';
import { Player } from './players/entities/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaguesModule } from './leagues/leagues.module';
import { TeamsModule } from './teams/teams.module';
import * as dotenv from 'dotenv';
import { Team } from './teams/entities/team.entity';
import { League } from './leagues/entities/league.entity';
dotenv.config();

console.log(process.env.DB_TYPE);
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Player, Team, League],
      synchronize: true, // Set to false in production
    }),
    PlayersModule,
    LeaguesModule,
    TeamsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
