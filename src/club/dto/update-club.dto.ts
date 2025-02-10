import { Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Player } from 'src/player/model';

export class UpdateClubDTO {
  @IsString()
  @Field(() => ID)
  id: string;

  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  stadium: string;

  @IsString()
  @Field()
  founded: number;

  @IsString()
  @Field()
  leagueId: string;

  @Field(() => [Player])
  players: Player[];

  @Field({ nullable: true })
  manager?: string;

  @Field()
  trophiesWon: number;

  @Field()
  totalMatches: number;

  @Field()
  totalWins: number;

  @Field()
  totalDraws: number;

  @Field()
  totalLosses: number;

  @Field({ nullable: true })
  avgAttendance?: number;

  @Field({ nullable: true })
  website?: string;
}
