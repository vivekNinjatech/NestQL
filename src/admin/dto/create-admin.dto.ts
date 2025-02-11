import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateAdminDTO {
  @IsString()
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  password: string;

  @IsString()
  @Field()
  role: Role;
}
