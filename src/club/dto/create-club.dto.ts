import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber, IsUUID } from 'class-validator';

@InputType()
export class CreateClubDTO {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  stadium: string;

  @IsNumber()
  @Field()
  founded: number;

  @IsUUID()
  @Field()
  leagueId: string;

  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  @IsOptional()
  playerIds?: string[];

  @IsString()
  @Field({ nullable: true })
  @IsOptional()
  manager?: string;

  @IsNumber()
  @Field({ defaultValue: 0 })
  trophiesWon?: number;

  @IsNumber()
  @Field({ defaultValue: 0 })
  totalMatches?: number;

  @IsNumber()
  @Field({ defaultValue: 0 })
  totalWins?: number;

  @IsNumber()
  @Field({ defaultValue: 0 })
  totalDraws?: number;

  @IsNumber()
  @Field({ defaultValue: 0 })
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
