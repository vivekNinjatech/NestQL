import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetClubByNameDTO {
  @IsString()
  @Field()
  name: string;
}
