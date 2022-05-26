
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Meta {
  @Field({ nullable: true })
  totalItems: string;

  @Field({ nullable: true })
  itemCount?: string;

  @Field({ nullable: true })
  itemsPerPage?: string;

  @Field({ nullable: true })
  totalPages: string

  @Field({ nullable: true})
  currentPage: number
}

@ObjectType()
export class Links {
    @Field({ nullable: true})
    first: string

    @Field({ nullable: true})
    next: string

    @Field({ nullable: true})
    previous: string

    @Field({ nullable: true})
    last: string
}

// meta: {
//     totalItems: 18,
//     itemCount: 10,
//     itemsPerPage: 10,
//     totalPages: 2,
//     currentPage: 1
//   },
