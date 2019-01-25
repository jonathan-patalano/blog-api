import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
@Entity()
export class User {
  @Column({ type: "varchar", name: "avatar" })
  avatar: string;

  @CreateDateColumn()
  created: Date;

  @Column({ type: "varchar", name: "email", length: 200 })
  email: string;

  @Column({ type: "varchar", name: "first_name", length: 100 })
  firstName: string;

  @Column({ type: "varchar", name: "last_name", length: 100 })
  lastName: string;

  @Column({ type: "varchar", name: "password" })
  password: string;

  @Column({ type: "varchar", name: "type" })
  type: Enumerator<string>;

  @UpdateDateColumn()
  updated: Date;

  @PrimaryGeneratedColumn("uuid", { name: "user_id" })
  userId: string;
}
