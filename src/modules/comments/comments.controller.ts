import { Controller, Get, Post, Patch, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    public async create(@Body() dto: CreateCommentDto) {
        return this.commentsService.create(dto);
    }

    @Get()
    public async findAllByPostID(@Query('postId', ParseIntPipe) postId: number) {
        return this.commentsService.findAllByPostID(postId);
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
        return this.commentsService.update(id, dto);
    }

    @Delete(':id')
    public async remove(@Param('id') id: string) {
        return this.commentsService.remove(id);
    }
}

