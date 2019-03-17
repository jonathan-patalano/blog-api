import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { ArticleService } from "./article.service";
import { Articles } from "./interface/Articles";

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Get(":id")
  @ApiOperation({
    title: "GetById"
  })
  async getById(@Param("id") id: string) {
    return this.articleService.getById(id);
  }

  @Get(":author")
  @ApiOperation({
    title: "getByAuthor"
  })
  async getByAuthor(@Param("authorId") authorId: string) {
    return this.articleService.getByAuthor(authorId);
  }

  @Post("create")
  @ApiOperation({
    title: "create"
  })
  async create(@Body("article") article: Articles) {
    return this.articleService.createArticle(article);
  }

  @Put("update")
  @ApiOperation({
    title: "update"
  })
  async update(@Body() article: Articles) {
    return this.articleService.update(article);
  }

  @Delete("delete")
  @ApiOperation({
    title: "delete"
  })
  async delete(@Body("articleId") articleId: string) {
    return this.articleService.delete(articleId);
  }
}
