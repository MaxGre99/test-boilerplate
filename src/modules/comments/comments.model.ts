import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
    @Prop({ required: true })
    postId!: number;

    @Prop({ required: true })
    text!: string;

    @Prop({ required: true, min: 1, max: 5 })
    rating!: number;

    @Prop({ required: true })
    author!: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

