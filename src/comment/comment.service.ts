import { Inject, Injectable } from "@nestjs/common";
import { CommentRepository } from "./comment.repository";
import { Comments } from "./interface/Comments";
import { Comment } from "./entity/comment.entity";

@Injectable()
export class CommentService {
  constructor(@Inject(CommentRepository) private readonly CommentRepository: CommentRepository) { }

  /**
   * Create comment and save it.
   *
   * @param comment - comment
   * @returns Created comment
   */
  async createComment(comment: Comments): Promise<Comment> {
    return this.CommentRepository.save(comment);
  }

  /**
   * Returns a comment identified by its author.
   *
   * @param authorId - author
   * @returns Resolves with author
   */
  async getByAuthor(authorId: string): Promise<Comment> {
    return this.CommentRepository.findOne(authorId);
  }

  /**
   * Returns a comment identified by its id.
   *
   * @param commentId - comment id
   * @returns Resolves with comment
   */
  async getById(commentId: string): Promise<Comment> {
    return this.CommentRepository.findOne(commentId);
  }

  /**
  * Update information of a comment
  *
  * @param comment - comment
  * @returns Resolves with comment
  */
  async updateComment(comment: Comments): Promise<Comment> {
    return this.CommentRepository.save(comment);
  }

  /**
   * Delete a comment
   *
   * @param id - comment id
   * @returns Resolves with comment
   */
  async deleteComment(id: string): Promise<boolean> {
    
    const commentDB = await this.CommentRepository.findOne({ where: { id } });
    if (commentDB) {
      this.CommentRepository.remove([commentDB]);
      return true;
    }
    return false;
  }

}
