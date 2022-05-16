import { InputType,Field } from '@nestjs/graphql';


@InputType()
export class CreateBillInput {
  @Field(() => [String], { description: "Products ids that are implacted it", nullable: false  })
  products: string[]

  @Field(() => String, { description: "uid of the employer", nullable: false })
  employer: string

  @Field(() => String, { description: "uuid of the Client", nullable: false })
  seller: string
}
