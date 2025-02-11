import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetPlayerByNationalityDTO {
  @IsString()
  @Field()
  nationality: string;
}
