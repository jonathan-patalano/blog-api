import { Inject, Injectable } from "@nestjs/common";
import { ArticleRepository } from "./article.repository";
import { Article } from "./entity/article.entity";
import { Articles } from "./interface/Articles";

@Injectable()
export class ArticleService {
  constructor(
    @Inject(ArticleRepository) private readonly articleRepository: ArticleRepository
  ) { }

  /**
   * Create article and save it.
   *
   * @param article - article
   * @returns Created article
   */
  async createArticle(article: Articles): Promise<Article> {
    return this.articleRepository.save(article);
  }

  /**
   * Returns a article identified by its author.
   *
   * @param authorId - article author
   * @returns Resolves with article
   */
  async getByAuthor(authorId: string): Promise<Article> {
    return this.articleRepository.findOne(authorId);
  }

  /**
   * Returns a article identified by its id.
   *
   * @param articleId - article id
   * @returns Resolves with article
   */
  async getById(articleId: string): Promise<Article> {
    return this.articleRepository.findOne(articleId);
  }

  /**
  * Update information of a article
  *
  * @param article - article
  * @returns Resolves with article
  */
  async update(article: Articles): Promise<Article> {
    return this.articleRepository.save(article);
  }

  /**
   * Delete a article
   *
   * @param articleId - article id
   * @returns Resolves with article
   */
  async delete(articleId: string): Promise<boolean> {
    
    const articleDB = await this.articleRepository.findOne({ where: { articleId } });
    if (articleDB) {
      this.articleRepository.remove([articleDB]);
      return true;
    }
    return false;
  }

}
