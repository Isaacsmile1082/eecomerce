import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'Name of the product', nullable: false })
  name: string;

  @Field(() => Float, { description: 'Price of the product', nullable: false})
  price: number;

  @Field(() => String, { description: 'Description text of the product', nullable: false})
  description: string
}
