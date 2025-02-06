import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class createPlayerDTO {
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
  club: string;

  @IsNumber()
  @Field()
  jerseyNumber: number;

  @IsNumber()
  @IsOptional()
  @Field({ nullable: true })
  height?: number;

  @IsNumber()
  @IsOptional()
  @Field({ nullable: true })
  weight?: number;

  @IsString({ each: true })
  @Field(() => [String])
  positions: string[];

  @IsNumber()
  @Field()
  goals: number;

  @IsNumber()
  @Field()
  assists: number;

  @IsNumber()
  @Field()
  matchesPlayed: number;

  @IsNumber()
  @Field()
  yellowCards: number;

  @IsNumber()
  @Field()
  redCards: number;

  @IsNumber()
  @Field()
  teamId: number;
}
