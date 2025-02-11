import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetLeagueByCountryDTO {
  @IsString()
  @Field()
  country: string;
}
