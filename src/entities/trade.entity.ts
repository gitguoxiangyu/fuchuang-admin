import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// Trades 表名
export class Trades extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', name: 'property', length: 191 }) // Column：字段
  property: string;

  @Column({ type: 'varchar', name: 'seller', length: 191 })
  seller: string;

  @Column({ type: 'varchar', name: 'buyer' })
  buyer: string;

  @Column({ type: 'varchar', name: 'uuid' })
  uuid: string;

  @Column({ type: 'double', name: 'price' })
  price: number;

  @Column()
  type: number;
}
