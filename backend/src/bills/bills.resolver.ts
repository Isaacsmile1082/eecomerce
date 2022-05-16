import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BillsService } from './bills.service';
import { Bill } from './entities/bill.model';
import { CreateBillInput } from './dto/create-bill.input';
import { UpdateBillInput } from './dto/update-bill.input';

@Resolver(() => Bill)
export class BillsResolver {
  constructor(private readonly billsService: BillsService) {}

  @Mutation(() => Bill)
  createBill(@Args('createBillInput') createBillInput: CreateBillInput) {
    return this.billsService.create(createBillInput);
  }

  @Query(() => [Bill], { name: 'bills' })
  findAll() {
    return this.billsService.findAll();
  }

  @Query(() => Bill, { name: 'bill' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.billsService.findOne(id);
  }

  @Mutation(() => Bill)
  updateBill(@Args('updateBillInput') updateBillInput: UpdateBillInput) {
    return this.billsService.update(updateBillInput.id, updateBillInput);
  }

  @Mutation(() => Bill)
  removeBill(@Args('id', { type: () => String }) id: string) {
    return this.billsService.remove(id);
  }
}
