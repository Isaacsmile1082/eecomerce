import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Employer, Employers } from './employer.model';
import { EmployerService } from './employer.service';
import { EmployerInput } from './dto/create-user.args';

import { FilterEmployerInput } from './dto/filter-employer.args';
@Resolver((of: Employer) => Employer)
export class EmployerResolver {
  constructor(private employerService: EmployerService) {}

  @Query((returns) => Employer, { name: 'employer' })
  async getEmployer(@Args('id', { type: () => String }) id: string) {
    const employer = await this.employerService.findOne(id);
    console.log(employer)
    return employer;
  }

  @Query((returns) => Employers, { name: 'employers' })
  async getAllEmployers(
    @Args('filterEmployer', { nullable: true}) FilterEmployer: FilterEmployerInput
  ) {
    return await this.employerService.findAll(FilterEmployer);
  }

  @Mutation((returns) => Employer)
  async createEmployer(
    @Args('EmployerData') CreateEmployerData: EmployerInput,
  ) {
    return await this.employerService.createOne(CreateEmployerData);
  }

  @Mutation((returns) => Boolean)
  async removeEmployer(@Args('id', { type: () => String }) id: string) {
    return await this.employerService.deleteOne(id);
  }

  @Mutation((returns) => Employer)
  async updateEmployer(
    @Args('EmployerData') UpdateEmployerData: EmployerInput,
  ) {
    return await this.employerService.updateOne(UpdateEmployerData);
  }
}
