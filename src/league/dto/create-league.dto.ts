import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class CreateLeagueDTO {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  country: string;

  @IsString()
  @Field()
  season: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  topScorerId?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  mostAssistsId?: string;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  totalTeams?: number;
}
