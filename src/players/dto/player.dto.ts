import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createPlayerDTO {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  nationality: string;

  @Field()
  club: string;

  @Field()
  jerseyNumber: number;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  weight?: number;

  @Field(() => [String])
  positions: string[];

  @Field()
  goals: number;

  @Field()
  assists: number;

  @Field()
  matchesPlayed: number;

  @Field()
  yellowCards: number;

  @Field()
  redCards: number;
}
