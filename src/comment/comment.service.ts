import { Inject, Injectable } from "@nestjs/common";
import { CommentRepository } from "./comment.repository";

@Injectable()
export class CommentService {
    constructor(
        @Inject(CommentRepository)
        private readonly CommentRepository: CommentRepository
    ) { }

    /**
     * Returns a commentaire by its id
     *
     * @param id - commentaireId
     * @returns Resolves with User
     */
    async getById(commentaireId: string) {
        return this.CommentRepository.findOne(commentaireId);
    }
}