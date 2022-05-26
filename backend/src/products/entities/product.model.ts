import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String, { description: 'uuid of the product' })
  id: string;

  @Field(() => String, { description: 'Name of the product' })
  name: string;

  @Field(() => Float, { description: 'Price of the product' })
  price: number;

  @Field(() => String, { description: 'Description text of the product' })
  description: string;

  @Field(() => Int, { description: 'Amount of products' })
  amount: number;
}
