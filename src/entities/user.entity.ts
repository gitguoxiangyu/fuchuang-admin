import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// User 表名
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'name' }) // Column：字段
  name: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;
}
