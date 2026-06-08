import { PostsRepository } from './posts.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
    constructor(private readonly postsRepository: PostsRepository) {}

    public async create(dto: CreatePostDto): Promise<Post> {
        return this.postsRepository.create(dto);
    }

    public async findAll(): Promise<Post[]> {
        return this.postsRepository.findAll();
    }

    public async findOne(id: number): Promise<Post> {
        const post = await this.postsRepository.findOne(id);
        if (!post) throw new NotFoundException(`Post #${id} not found`);
        return post;
    }

    public async update(id: number, dto: UpdatePostDto): Promise<Post> {
        const post = await this.postsRepository.update(id, dto);
        if (!post) throw new NotFoundException(`Post #${id} not found`);
        return post;
    }

    public async remove(id: number): Promise<void> {
        await this.postsRepository.remove(id);
    }
}

