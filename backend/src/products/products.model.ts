import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(type => String)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int)
  price?: string;

  @Field(type => String)
  description: string;
}