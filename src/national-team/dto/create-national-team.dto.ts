import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Player } from 'src/player/model';

@InputType()
export class CreateNationalTeamDTO {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  country: string;

  @Field(() => [Player])
  players: Player[];

  @IsString()
  @Field()
  coach: string;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  fifaRanking?: number;

  @IsNumber()
  @Field()
  worldCupsWon: number;

  @IsNumber()
  @Field()
  totalMatches: number;

  @IsNumber()
  @Field()
  totalWins: number;

  @IsNumber()
  @Field()
  totalDraws: number;

  @IsNumber()
  @Field()
  totalLosses: number;
}
