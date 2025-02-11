import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetLeagueByNameDTO {
  @IsString()
  @Field()
  name: string;
}
