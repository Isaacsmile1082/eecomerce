import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsResolver } from './bills.resolver';
import { Bill } from './entities/bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/products.entity';
import { Employer } from 'src/employer/employer.entity';
import { Client } from 'src/clients/clients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bill, Product, Employer, Client])],
  providers: [BillsResolver, BillsService]
})
export class BillsModule {}
