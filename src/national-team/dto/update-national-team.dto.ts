import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateNationalTeamDTO } from './create-national-team.dto';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNationalTeamDTO extends PartialType(CreateNationalTeamDTO) {
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  country?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  coach?: string;

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
