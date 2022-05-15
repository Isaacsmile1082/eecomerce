import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Employer } from './employer.model';
import { EmployerService } from './employer.service';
import { EmployerInput } from './dto/create-user.args';

@Resolver((of: Employer) => Employer)
export class EmployerResolver {
  constructor(private employerService: EmployerService) {}

  @Query((returns) => Employer, { name: 'employer' })
  async getEmployer(@Args('id', { type: () => Int }) id: number) {
    return await this.employerService.findOne(id);
  }

  @Query((returns) => [Employer], { name: 'employers' })
  async getAllEmployers() {
    return await this.employerService.findAll();
  }

  @Mutation((returns) => Employer)
  async createEmployer(
    @Args('EmployerData') CreateEmployerData: EmployerInput,
  ) {
    return await this.employerService.createOne(CreateEmployerData);
  }

  @Mutation((returns) => Boolean)
  async deleteEmployer(@Args('id', { type: () => Int }) id: number) {
    return await this.employerService.deleteOne(id);
  }

  @Mutation((returns) => Employer)
  async updateEmployer(
    @Args('EmployerData') UpdateEmployerData: EmployerInput,
  ) {
    return await this.employerService.updateOne(UpdateEmployerData);
  }
}
