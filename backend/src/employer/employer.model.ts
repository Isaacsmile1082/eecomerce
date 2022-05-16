import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employer {
  @Field((type) => String)
  id: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
