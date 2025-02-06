import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeamInput {
  @Field()
  name: string;

  @Field()
  stadium: string;

  @Field()
  founded: number;

  @Field()
  numberOfPlayers: number;

  @Field()
  manager: string;

  @Field()
  capitan: string;

  @Field()
  league: string;

  @Field()
  totalWins: number;

  @Field()
  totalLosses: number;

  @Field()
  totalDraws: number;

  @Field()
  totalGoalsScored: number;

  @Field()
  totalGoalsConceded: number;
}
