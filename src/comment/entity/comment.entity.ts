import {
  Column,
  CreateDateColumn,
  Entity,
} from "typeorm";
@Entity()
export class Comment {
  @Column({ type: "varchar", name: "commentaireId" })
  commentaireId: string;

  @Column({ type: "varchar", name: "authorId" })
  authorId: string;

  @CreateDateColumn()
  created: Date;

  @Column({ type: "varchar", name: "content" })
  content: string;
}
