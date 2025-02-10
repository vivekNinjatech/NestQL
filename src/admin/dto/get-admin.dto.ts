import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetAdminDTO {
  @IsString()
  @Field()
  id: string;
}
