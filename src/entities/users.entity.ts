import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// Users 表名
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'name' }) // Column：字段
  name: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;

  @Column({ type: 'varchar', name: 'phone' })
  phone: string;

  @Column({ type: 'boolean', name: 'verified' })
  verified: boolean;

  @Column({ type: 'double', name: 'balance' })
  balance: number;
}
