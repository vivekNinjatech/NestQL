import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetNationalTeamByNameDTO {
  @IsString()
  @Field()
  name: string;
}
