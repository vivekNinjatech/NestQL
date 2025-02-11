import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class CreateNationalTeamDTO {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  country: string;

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  playerIds: string[];

  @IsString()
  @Field()
  coach: string;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  fifaRanking?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  worldCupsWon?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  totalMatches?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  totalWins?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  totalDraws?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  totalLosses?: number;
}
