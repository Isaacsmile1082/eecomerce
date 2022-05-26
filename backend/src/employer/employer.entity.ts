import { Bill } from 'src/bills/entities/bill.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Employer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Bill, (bill) => bill.employer)
  bills: Bill[]

  @Column()
  phoneNumber: string

  @Column()
  age: number
}