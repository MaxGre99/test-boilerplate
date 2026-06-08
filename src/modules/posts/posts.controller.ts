import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly PostsService: PostsService) {}

    @Post()
    public async create(@Body() dto: CreatePostDto) {
        return this.PostsService.create(dto);
    }

    @Get()
    public async findAll() {
        return this.PostsService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.PostsService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePostDto) {
        return this.PostsService.update(id, dto);
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number) {
        return this.PostsService.remove(id);
    }
}
