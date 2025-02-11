import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class DeleteLeagueDTO {
  @IsString()
  @Field()
  id: string;
}
