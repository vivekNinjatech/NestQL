import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class DeletePlayerDTO {
  @IsString()
  @Field()
  id: string;
}
