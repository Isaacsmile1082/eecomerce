import { Client } from "src/clients/clients.entity";
import { Employer } from "src/employer/employer.entity";
// import { Product } from "src/products/products.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Bill {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float')
    total: string;

    @OneToOne(type => Employer) @JoinColumn()
    seller: Employer
    
    @OneToOne(type => Client) @JoinColumn()
    owner: Client;

    // @OneToMany(type => Product, product => product.id)
    // products: Product[]

}
