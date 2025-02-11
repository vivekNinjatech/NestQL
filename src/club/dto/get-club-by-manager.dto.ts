// get-club-by-manager.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetClubByManagerDTO {
  @IsString()
  @Field()
  manager: string;
}
