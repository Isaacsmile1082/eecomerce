import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    phoneNumber: number;
    
    @Column()
    email: string;
    
}