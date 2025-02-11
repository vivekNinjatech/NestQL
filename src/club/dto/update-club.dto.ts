import { Field, InputType, ID } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber, IsUUID } from 'class-validator';

@InputType()
export class UpdateClubDTO {
  @IsUUID()
  @Field(() => ID)
  id: string;

  @IsString()
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @IsString()
  @Field({ nullable: true })
  @IsOptional()
  stadium?: string;

  @IsNumber()
  @Field({ nullable: true })
  @IsOptional()
  founded?: number;

  @IsUUID()
  @Field({ nullable: true })
  @IsOptional()
  leagueId?: string;

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  @IsOptional()
  playerIds?: string[];

  @IsString()
  @Field({ nullable: true })
  @IsOptional()
  manager?: string;

  @IsNumber()
  @Field({ nullable: true })
  @IsOptional()
  trophiesWon?: number;

  @IsNumber()
  @Field({ nullable: true })
  @IsOptional()
  totalMatches?: number;

  @IsNumber()
  @Field({ nullable: true })
  @IsOptional()
  totalWins?: number;

  @IsNumber()
  @Field({ nullable: true })
  @IsOptional()
  totalDraws?: number;

  @IsNumber()
  @Field({ nullable: true })
  @IsOptional()
  totalLosses?: number;

  @IsNumber()
  @Field({ nullable: true })
  @IsOptional()
  avgAttendance?: number;

  @IsString()
  @Field({ nullable: true })
  @IsOptional()
  website?: string;
}
