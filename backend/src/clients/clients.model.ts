import { Field, ObjectType } from '@nestjs/graphql';

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
}   