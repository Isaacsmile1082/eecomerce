import { Client } from "src/clients/clients.entity";
import { Employer } from "src/employer/employer.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Product } from '../../products/entities/products.entity';;

@Entity()
export class Bill {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("datetime", { nullable: false})
    billdate: Date;

    @ManyToMany(type => Product, { nullable: false})
    @JoinTable()
    products: Product[]

    @ManyToOne(() => Employer, (employer) => employer.bills, { nullable: false})
    employer: Employer

    @ManyToOne(() => Client, (client) => client.bills, { nullable: false})
    seller: Client
}