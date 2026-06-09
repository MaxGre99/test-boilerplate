import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
    constructor(private readonly PostsService: PostsService) {}

    @ApiOperation({ summary: 'Create post' })
    @ApiResponse({ status: 201, description: 'Post created' })
    @Post()
    public async create(@Body() dto: CreatePostDto) {
        return this.PostsService.create(dto);
    }

    @ApiOperation({ summary: 'Get all posts' })
    @ApiResponse({ status: 200, description: 'List of posts' })
    @Get()
    public async findAll() {
        return this.PostsService.findAll();
    }

    @ApiOperation({ summary: 'Get post by id' })
    @ApiResponse({ status: 200, description: 'Post found' })
    @ApiResponse({ status: 404, description: 'Post not found' })
    @Get(':id')
    public async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.PostsService.findOne(id);
    }

    @ApiOperation({ summary: 'Update post' })
    @ApiResponse({ status: 200, description: 'Post updated' })
    @ApiResponse({ status: 404, description: 'Post not found' })
    @Patch(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePostDto) {
        return this.PostsService.update(id, dto);
    }

    @ApiOperation({ summary: 'Delete post' })
    @ApiResponse({ status: 200, description: 'Post deleted' })
    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number) {
        return this.PostsService.remove(id);
    }
}
