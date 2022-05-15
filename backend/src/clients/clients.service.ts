import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './clients.entity';
import { Repository } from 'typeorm';
import { ClientInput } from './dto/create-client.args';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private clientRepository: Repository<Client>,
    ) { }

    async findAll(): Promise<Client[]> {
        return await this.clientRepository.find();
    }

    async findOne(id: string): Promise<Client> {
        return await this.clientRepository.findOne(id);
    }

    async createOne(client: ClientInput): Promise<Client> {
        return await this.clientRepository.save(client)
    }

    async updateOne(client: ClientInput,): Promise<Client> {
        return await this.clientRepository.save(client);
    }

    async deleteOne(clientId: string) {
        await this.clientRepository.delete(clientId);
        return true;
    }

}
