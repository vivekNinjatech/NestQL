import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetNationalTeamDTO {
  @IsString()
  @Field()
  id: string;
}
