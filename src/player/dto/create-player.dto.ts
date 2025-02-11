import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsInt,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

@InputType()
export class CreatePlayerDTO {
  @IsString()
  @Field()
  name: string;

  @IsInt()
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

  @IsArray()
  @IsString({ each: true })
  @Field(() => [String])
  positions: string[];

  @IsInt()
  @Field()
  appearances: number;

  @IsInt()
  @Field()
  goals: number;

  @IsInt()
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
