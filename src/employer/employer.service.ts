import { Injectable } from '@nestjs/common';
import { Employer } from './employer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployerInput } from './dto/create-user.args';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private employerRepository: Repository<Employer>,
  ) {}

  async findAll(): Promise<Employer[]> {
    return await this.employerRepository.find();
  }

  async findOne(id: number): Promise<Employer> {
    return await this.employerRepository.findOne(id);
  }

  async createOne(employer: EmployerInput): Promise<Employer> {
    return await this.employerRepository.save(employer);
  }
}
