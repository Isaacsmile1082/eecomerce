import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Client } from './clients.entity';
import { ClientsService } from './clients.service';

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    providers: [ClientsService],
})
export class ClientsModule {}
