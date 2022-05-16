import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerModule } from './employer/employer.module';
import { Employer } from './employer/employer.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/clients.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/products.entity';
import { BillsModule } from './bills/bills.module';
import { Bill } from './bills/entities/bill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'root',
      password: 'pass',
      database: 'eecomerce',
      entities: [Employer, Client, Product, Bill],
      synchronize: true,
    }),
    EmployerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'isoDate'
      }
    }),
    ClientsModule,
    ProductsModule,
    BillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
