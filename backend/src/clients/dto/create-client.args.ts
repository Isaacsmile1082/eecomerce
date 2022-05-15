import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClientInput {

  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field()
  @IsNumber()
  phoneNumber: number;
}