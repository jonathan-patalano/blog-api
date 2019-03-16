import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  @Entity()
  export class Article {
    @PrimaryGeneratedColumn("uuid", { name: "articleId" })
    articleId: string;
  
    @Column({ type: "varchar", name: "authorId" })
    authorId: string;
  
    @CreateDateColumn()
    created: Date;
  
    @Column({ type: "varchar", name: "content" })
    content: string;
  }