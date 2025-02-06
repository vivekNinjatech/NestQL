import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class League {
  @Field(() => Int, { description: 'The unique identifier for the league' })
  id: number;

  @Field({ description: 'The name of the league' })
  name: string;

  @Field({ description: 'The country where the league is based' })
  country: string;

  @Field({ description: 'The year the league was founded' })
  founded: number;

  @Field(() => Int, { description: 'The number of teams in the league' })
  numberOfTeams: number;

  @Field({ description: 'The current champion of the league' })
  currentChampion: string;

  @Field({ description: 'The top scorer in the league' })
  topScorer: string;

  @Field(() => Int, {
    description: 'The total number of goals scored in the league',
  })
  totalGoals: number;
}
