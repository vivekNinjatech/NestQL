import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class DeleteClubDTO {
  @IsString()
  @Field(() => ID)
  id: string;
}
