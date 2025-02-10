import { Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

export class GetClubDTO {
  @IsString()
  @Field(() => ID)
  id: string;
}
