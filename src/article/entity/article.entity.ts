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

    @CreateDateColumn()
    updated: Date;
  
    @Column({ type: "varchar", name: "titre" })
    titre: string;

    @Column({ type: "varchar", name: "content" })
    content: string;

    @Column({ type: "int", name: "likes" })
    likes: Number;

    @Column({ type: "int", name: "dislikes" })
    dislikes: Number;

    @Column({ type: "varchar", name: "picture" })
    picture: string;
    
  }