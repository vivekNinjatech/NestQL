// get-club-by-founded-year.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class GetClubByFoundedYearDTO {
  @IsNumber()
  @Field()
  founded: number;
}
