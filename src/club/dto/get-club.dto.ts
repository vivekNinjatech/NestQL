// get-club-by-name.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetClubByIdDTO {
  @IsString()
  @Field()
  id: string;
}
