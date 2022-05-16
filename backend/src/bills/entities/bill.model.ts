import { ObjectType, Field } from '@nestjs/graphql';
import { Client } from 'src/clients/clients.model';
import { Employer } from 'src/employer/employer.model';
import { Product } from 'src/products/entities/product.model';

@ObjectType()
export class Bill {
  @Field(() => String, { description: 'Id of the bill' })
  id: string;

  @Field(() => Date, {description: "Date when it was created"})
  billdate: Date

  @Field(() => [Product], { description: "Products that are implacted it"  })
  products: Product[]

  @Field(() => Employer, { description: "Employer implicated" })
  employer: Employer

  @Field(() => Client, { description: "Client of this bill" })
  seller: Client

}
