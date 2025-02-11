import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetLeagueDTO {
  @IsString()
  @Field()
  id: string;
}
