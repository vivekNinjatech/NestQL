// get-club-by-league-id.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetClubByLeagueIdDTO {
  @IsString()
  @Field()
  leagueId: string;
}
