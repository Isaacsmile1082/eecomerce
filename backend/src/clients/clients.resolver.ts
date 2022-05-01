import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Client } from './clients.model';
import { ClientsService } from './clients.service';
import { ClientInput } from './dto/create-client.args';

@Resolver((of) => Client)
export class ClientsResolver {
  constructor(private clientsService: ClientsService) {}

  @Query((returns) => Client, { name: 'getClient' })
  async client(@Args('id', { type: () => String }) id: string) {
    return this.clientsService.findOne(id);
  }

  @Query((returns) => [Client])
  async getAllClients() {
    return this.clientsService.findAll();
  }

  @Mutation((returns) => Client)
  async createClient(@Args('ClientData') CreateClientData: ClientInput) {
    return await this.clientsService.createOne(CreateClientData);
  }

  @Mutation((returns) => Client)
  async updateClient(@Args('ClientData') UpdateClientData: ClientInput) {
    return await this.clientsService.updateOne(UpdateClientData);
  }

  @Mutation((returns) => Client)
  async deleteClient(@Args('ClientId') DeleteClientId: string) {
    return await this.clientsService.deleteOne(DeleteClientId)
  }
}
