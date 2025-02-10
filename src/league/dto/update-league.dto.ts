import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateLeagueDTO } from './create-league.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateLeagueDTO extends PartialType(CreateLeagueDTO) {
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
  season?: string;

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
