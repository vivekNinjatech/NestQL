import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Admin {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
