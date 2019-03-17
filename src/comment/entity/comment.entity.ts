import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity()
export class Comment {
  @PrimaryGeneratedColumn("uuid", { name: "commentaireId" })
  commentaireId: string;

  @Column({ type: "varchar", name: "authorId" })
  authorId: string;

  @CreateDateColumn()
  created: Date;

  @Column({ type: "varchar", name: "content" })
  content: string;
}
