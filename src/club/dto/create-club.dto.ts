import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Player } from 'src/player/model';

@InputType()
export class CreateClubDTO {
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

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
