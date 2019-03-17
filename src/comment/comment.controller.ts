import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { CommentService } from "./comment.service";
import { Comments } from "./interface/Comments";

@Controller("comment")
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Get(":id")
    @ApiOperation({
        title: "GetById"
    })
    async getById(@Param("id") id: string) {
        return this.commentService.getById(id);
    }

    @Get(":author")
    @ApiOperation({
        title: "GetById"
    })
    async getByAuthor(@Param("author") id: string) {
        return this.commentService.getById(id);
    }

    @Post("create")
    @ApiOperation({
        title: "create"
    })
    async create(@Body("comment") comment: Comments) {
        return this.commentService.createComment(comment);
    }

    @Put("update")
    @ApiOperation({
        title: "update"
    })
    async update(@Body() comment: Comments) {
        return this.commentService.updateComment(comment);
    }

    @Delete("delete")
    @ApiOperation({
        title: "delete"
    })
    async delete(@Body("id") id: string) {
        return this.commentService.deleteComment(id);
    }
}
