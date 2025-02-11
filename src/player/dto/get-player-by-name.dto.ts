import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetPlayerByNameDTO {
  @IsString()
  @Field()
  name: string;
}
