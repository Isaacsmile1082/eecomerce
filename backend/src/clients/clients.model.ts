import { Field, ObjectType } from '@nestjs/graphql';
import { Bill } from 'src/bills/entities/bill.model';

@ObjectType()
export class Client {
    @Field()
    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    phoneNumber: number;

    @Field()
    email: string;

    @Field(type => [Bill])
    bills: Bill[]
}   