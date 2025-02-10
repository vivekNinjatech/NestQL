import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Club } from 'src/club/model';
import { NationalTeam } from 'src/national-team/model';
import { League } from 'src/league/model';

@InputType()
export class CreatePlayerDTO {
  @IsString()
  @Field()
  name: string;

  @IsNumber()
  @Field()
  age: number;

  @IsString()
  @Field()
  nationality: string;

  @IsString()
  @Field()
  country: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  clubId?: string;

  @Field(() => [String])
  positions: string[];

  @IsNumber()
  @Field()
  appearances: number;

  @IsNumber()
  @Field()
  goals: number;

  @IsNumber()
  @Field()
  assists: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  height?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  weight?: number;

  @IsString()
  @Field()
  foot: string;

  @IsOptional()
  @Field({ nullable: true })
  contractUntil?: Date;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  marketValue?: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  nationalTeamId?: string;
}
