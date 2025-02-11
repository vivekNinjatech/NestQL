import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class DeleteNationalTeamDTO {
  @IsString()
  @Field()
  id: string;
}
