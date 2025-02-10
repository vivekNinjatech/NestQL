import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreatePlayerDTO } from './create-player.dto';

@InputType()
export class UpdatePlayerDTO extends PartialType(CreatePlayerDTO) {
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  name?: string;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  age?: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  nationality?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  country?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  clubId?: string;

  @IsOptional()
  @Field(() => [String], { nullable: true })
  positions?: string[];

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  appearances?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  goals?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  assists?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  height?: number;

  @IsOptional()
  @IsNumber()
  @Field({ nullable: true })
  weight?: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  foot?: string;

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
