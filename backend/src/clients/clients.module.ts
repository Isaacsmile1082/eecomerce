import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Client } from './clients.entity';
import { ClientsService } from './clients.service';
import { ClientsResolver } from './clients.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientsService, ClientsResolver],
})
export class ClientsModule {}
