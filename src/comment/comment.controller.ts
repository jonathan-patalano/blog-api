import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { CommentService } from "./comment.service";

@Controller("commentaire")
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Get(":commentaireId")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Commentaire trouvé et retourné"
    })
    async getById(@Param("commentaireId") commentaireId: string) {
        return this.commentService.getById(commentaireId);
    }
}