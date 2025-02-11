import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetNationalTeamByCountryDTO {
  @IsString()
  @Field()
  country: string;
}
