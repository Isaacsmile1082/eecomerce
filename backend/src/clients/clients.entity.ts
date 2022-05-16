import { Bill } from 'src/bills/entities/bill.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: number;

  @Column()
  email: string;

  @OneToMany(() => Bill, (bill) => bill.seller)
  bills: Bill[]
}
