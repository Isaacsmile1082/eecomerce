import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employer } from './employer.entity';
import { EmployerResolver } from './employer.resolver';
import { EmployerService } from './employer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employer])],
  providers: [EmployerService, EmployerResolver],
})
export class EmployerModule {}
