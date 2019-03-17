export interface Articles {
  articleId?: string;
  authorId?: string;
  created?: Date;
  updated?: Date;
  titre: string;
  content: string;
  likes: Number;
  dislikes: Number;
  picture: string;
}