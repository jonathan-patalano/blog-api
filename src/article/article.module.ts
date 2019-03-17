import { Module } from "@nestjs/common";

import { customRepository } from "../utils/custom-repository.tools";
import { DatabaseModule } from "../utils/database/database.module";
import { ArticleService } from "./article.service";
import { ArticleController } from "./article.controller";
import { ArticleRepository } from "./article.repository";


@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticleService, customRepository(ArticleRepository)]
})
export class ArticleModule {}
