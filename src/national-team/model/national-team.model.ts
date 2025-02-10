import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Player } from '../../player/model';

@ObjectType()
export class NationalTeam {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  country: string;

  @Field(() => [Player])
  players: Player[];

  @Field()
  coach: string;

  @Field({ nullable: true })
  fifaRanking?: number;

  @Field()
  worldCupsWon: number;

  @Field()
  totalMatches: number;

  @Field()
  totalWins: number;

  @Field()
  totalDraws: number;

  @Field()
  totalLosses: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
