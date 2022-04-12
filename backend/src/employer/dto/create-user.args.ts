import { IsEmail, IsInt } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EmployerInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsInt()
  id: number;
}
