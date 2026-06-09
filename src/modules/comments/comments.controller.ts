import { Controller, Get, Post, Patch, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @ApiOperation({ summary: 'Create comment' })
    @ApiResponse({ status: 201, description: 'Comment created' })
    @Post()
    public async create(@Body() dto: CreateCommentDto) {
        return this.commentsService.create(dto);
    }

    @ApiOperation({ summary: 'Get all comments by postId' })
    @ApiQuery({ name: 'postId', type: Number })
    @ApiResponse({ status: 200, description: 'List of comments' })
    @Get()
    public async findAllByPostID(@Query('postId', ParseIntPipe) postId: number) {
        return this.commentsService.findAllByPostID(postId);
    }

    @ApiOperation({ summary: 'Update comment' })
    @ApiResponse({ status: 200, description: 'Comment updated' })
    @ApiResponse({ status: 404, description: 'Comment not found' })
    @Patch(':id')
    public async update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
        return this.commentsService.update(id, dto);
    }

    @ApiOperation({ summary: 'Delete comment' })
    @ApiResponse({ status: 200, description: 'Comment deleted' })
    @Delete(':id')
    public async remove(@Param('id') id: string) {
        return this.commentsService.remove(id);
    }
}

