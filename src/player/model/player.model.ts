import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Club } from '../../club/model';
import { NationalTeam } from '../../national-team/model';
import { League } from '../../league/model';

@ObjectType()
export class Player {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  nationality: string;

  @Field()
  country: string;

  @Field({ nullable: true })
  clubId?: string;

  @Field(() => Club, { nullable: true })
  club?: Club;

  @Field(() => [String])
  positions: string[];

  @Field()
  appearances: number;

  @Field()
  goals: number;

  @Field()
  assists: number;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  weight?: number;

  @Field()
  foot: string;

  @Field({ nullable: true })
  contractUntil?: Date;

  @Field({ nullable: true })
  marketValue?: number;

  @Field({ nullable: true })
  nationalTeamId?: string;

  @Field(() => NationalTeam, { nullable: true })
  nationalTeam?: NationalTeam;

  @Field(() => [League], { nullable: true })
  topScorerIn?: League[];

  @Field(() => [League], { nullable: true })
  mostAssistsIn?: League[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
