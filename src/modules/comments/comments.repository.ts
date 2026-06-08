import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsRepository {
    constructor(
        @InjectModel(Comment.name)
        private readonly commentModel: Model<CommentDocument>
    ) {}

    public async create(dto: CreateCommentDto): Promise<CommentDocument> {
        return this.commentModel.create(dto);
    }

    public async findAllByPostId(postId: number): Promise<CommentDocument[]> {
        return this.commentModel.find({ postId }).exec();
    }

    public async findOne(id: string): Promise<CommentDocument | null> {
        return this.commentModel.findById(id).exec();
    }

    public async update(id: string, dto: UpdateCommentDto): Promise<CommentDocument | null> {
        return this.commentModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    public async remove(id: string): Promise<void> {
        await this.commentModel.findByIdAndDelete(id).exec();
    }
}
