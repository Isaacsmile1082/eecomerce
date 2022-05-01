import { Field, ObjectType,  } from '@nestjs/graphql';
import { Client } from 'src/clients/clients.model';
import { Employer } from 'src/employer/employer.model';
import { Product } from 'src/products/products.model';

@ObjectType()
export class Bill {
    @Field()
    id: string

    @Field(type => String)
    total: string

    @Field(type => Employer)
    seller: Employer

    @Field(type => Client)
    owner: Client

    @Field(type => [Product])
    products: Product[]
}   