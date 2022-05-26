import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { EmployerInput } from './create-user.args';

@InputType() 
export class OptionsInput {
    @Field()
    @IsNumber()
    page: number;

    @Field()
    @IsNumber()
    limit: number

    @Field()
    @IsString()
    route: string
}

@InputType()
export class FilterEmployerInput extends PartialType(EmployerInput) {
    
    @Field({ nullable: true })
    options?: OptionsInput
}
