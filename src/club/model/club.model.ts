import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Player } from '../../player/model';
import { League } from '../../league/model';

@ObjectType()
export class Club {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  stadium: string;

  @Field()
  founded: number;

  @Field()
  leagueId: string;

  @Field(() => League)
  league: League;

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

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
