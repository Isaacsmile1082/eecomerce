import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Bill } from 'src/bills/entities/bill.model';

import { Links, Meta } from './dto/counter';

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

  @Field({ nullable: true })
  phoneNumber: string

  @Field({ nullable: true})
  age: number
  
  @Field((type) => [Bill])
  bills: Bill[]
}

@ObjectType()
export class Employers {
  @Field((type) => [Employer])
  items: Employer[]

  @Field(type => Meta)
  meta: Meta

  @Field(type => Links)
  links: Links
}