// get-club-by-stadium.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetClubByStadiumDTO {
  @IsString()
  @Field()
  stadium: string;
}
