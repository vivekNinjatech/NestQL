import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Club } from '../../club/model';
import { Player } from '../../player/model';

@ObjectType()
export class League {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  country: string;

  @Field(() => [Club])
  clubs: Club[];

  @Field()
  season: string;

  @Field({ nullable: true })
  topScorerId?: string;

  @Field(() => Player, { nullable: true })
  topScorer?: Player;

  @Field({ nullable: true })
  mostAssistsId?: string;

  @Field(() => Player, { nullable: true })
  mostAssists?: Player;

  @Field({ nullable: true })
  totalTeams?: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
