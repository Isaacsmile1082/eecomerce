import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EmployerInput {
  @Field({ nullable: true })
  @IsString()
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field({nullable: false})
  @IsPhoneNumber()
  phoneNumber: string;

  @Field({nullable: false})
  age: number;
}
