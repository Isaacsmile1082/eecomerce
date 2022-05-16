import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/clients/clients.entity';
import { Employer } from 'src/employer/employer.entity';
import { Product } from 'src/products/entities/products.entity';
import { Repository } from 'typeorm';
import { CreateBillInput } from './dto/create-bill.input';
import { UpdateBillInput } from './dto/update-bill.input';
import { Bill } from './entities/bill.entity';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Employer)
    private employerRepository: Repository<Employer>
  ) { }

  async create(createBillInput: CreateBillInput) {
    const products = await this.productRepository.findByIds(createBillInput.products)
    let employer = await this.employerRepository.findOne(createBillInput.employer)
    const seller = await this.clientRepository.findOne(createBillInput.seller)
    const bill = this.billRepository.create();

    bill.employer = employer;
    bill.seller = seller;
    bill.products = products;
    bill.billdate = new Date;

    return await this.billRepository.save(bill);

  }

  async findAll() {
    return await this.billRepository.createQueryBuilder("bill")
      .leftJoinAndSelect(
        "bill.employer",
        "employer",
      ).leftJoinAndSelect("bill.seller", "seller")
      .leftJoinAndSelect("bill.products", "product")
      .getMany()
  }

  async findOne(id: string) {
    return await this.billRepository.
      createQueryBuilder("bill")
      .leftJoinAndSelect(
        "bill.employer",
        "employer"
      ).leftJoinAndSelect("bill.seller", "seller")
      .leftJoinAndSelect("bill.products", "product")
      .where("bill.id = :id", { id })
      .getOne();
  }

  async update(id: string, updateBillInput: UpdateBillInput) {
    let bill = await this.findOne(id)
    let employer = await this.employerRepository.findOne(updateBillInput.employer)
    const seller = await this.clientRepository.findOne(updateBillInput.seller)

    let products: Product[]


    if (updateBillInput.products) {
      products = await this.productRepository.findByIds(updateBillInput.products)
      bill.products = products;
    }

    return await this.billRepository.save({
      id,
      ...bill,
      employer,
      seller
    })


  }

  async remove(id: string) {
    await this.billRepository.delete(id)
    return true;
  }
}
