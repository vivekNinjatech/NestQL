import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetPlayerByClubIdDTO {
  @IsString()
  @Field()
  clubId: string;
}
