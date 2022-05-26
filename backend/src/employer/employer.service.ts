import { Injectable } from '@nestjs/common';
import { Employer } from './employer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { FilterEmployerInput } from './dto/filter-employer.args';
import { EmployerInput } from './dto/create-user.args';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private employerRepository: Repository<Employer>,
  ) { }

  async findAll({
    firstName = '',
    lastName = '',
    phoneNumber = '',
    email = '',
    options = {
      limit: 10,
      page: 1,
      route: 'http://localhost:3000'
    }
  }: FilterEmployerInput = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    options: {
      limit: 10,
      page: 1,
      route: 'http://localhost:3000'
    }
  },
  ): Promise<Pagination<Employer>> {
    const data = await this.paginate(options, {
      firstName,
      lastName,
      phoneNumber,
      email
    });
   
    return data
  }

  async paginate(
    options: IPaginationOptions, filter?: FilterEmployerInput): Promise<Pagination<Employer>> {
    const queryBuilder = this.employerRepository.createQueryBuilder("employer")
    await queryBuilder
      .where("LOWER(employer.firstName) like :name", { name: `%${filter.firstName}%` })
      .andWhere('employer.lastName like :lastName', { lastName: `%${filter.lastName}%` })
      .andWhere('employer.email like :email', { email: `%${filter.email}%` })
      .andWhere('employer.phoneNumber like :phoneNumber', { phoneNumber: `%${filter.phoneNumber}%` })
      .leftJoinAndSelect('employer.bills', 'bill')
      .leftJoinAndSelect('bill.products', 'product')
      .leftJoinAndSelect('bill.seller', 'seller')
      .leftJoinAndSelect('bill.employer', 'employee')
      .getManyAndCount()

    return paginate<Employer>(queryBuilder, options);
  }


  async findOne(id: number): Promise<Employer> {
    return await this.employerRepository.findOne(id);
  }

  async createOne(employer: EmployerInput): Promise<Employer> {
    return await this.employerRepository.save(employer);
  }

  async deleteOne(id: number): Promise<Boolean> {
    await this.employerRepository.delete(id);
    return true;
  }

  async updateOne(employer: EmployerInput): Promise<Employer> {
    return await this.employerRepository.save(employer);
  }
}
