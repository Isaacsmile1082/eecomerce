import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    ) {}

  async create(createProductInput: CreateProductInput): Promise<Product> {
    return await this.productsRepository.save(createProductInput)
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async findOne(id: string) {
    return await this.productsRepository.findOne(id);
  }

  async update(id: string, updateProductInput: UpdateProductInput): Promise<Product> {
    return await this.productsRepository.save({
      id,
      ...updateProductInput
    });
  }

  async remove(id: string): Promise<Boolean> {
    await this.productsRepository.delete(id);
    return true;
  }
}
