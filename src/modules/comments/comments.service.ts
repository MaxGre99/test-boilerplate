import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentDocument } from './comments.model';

@Injectable()
export class CommentsService {
    constructor(private readonly commentsRepository: CommentsRepository) {}

    public async create(dto: CreateCommentDto): Promise<CommentDocument> {
        return this.commentsRepository.create(dto);
    }

    public async findAllByPostID(postId: number): Promise<CommentDocument[]> {
        return this.commentsRepository.findAllByPostId(postId);
    }

    public async update(id: string, dto: UpdateCommentDto): Promise<CommentDocument> {
        const comment = await this.commentsRepository.update(id, dto);
        if (!comment) throw new NotFoundException(`Comment #${id} not found`);
        return comment;
    }

    public async remove(id: string): Promise<void> {
        await this.commentsRepository.remove(id);
    }
}

