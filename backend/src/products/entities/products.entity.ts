import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 100 })
    name: string;

    @Column("numeric")
    price: number;

    @Column("varchar")
    description: string;

    @Column("int")
    amount: number;
}