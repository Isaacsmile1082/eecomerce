import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './bill.entity';
import { BillsService } from './bills.service';
@Module({
    imports: [TypeOrmModule.forFeature([Bill])],
    providers: [BillsService],
})

export class BillsModule {}
