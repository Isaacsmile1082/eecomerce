import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employer {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
