import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './posts.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsRepository {
    constructor(
        @InjectRepository(Post)
        private readonly postModel: Repository<Post>
    ) {}

    public async create(dto: CreatePostDto): Promise<Post> {
        const post = this.postModel.create(dto);
        return this.postModel.save(post);
    }

    public async findAll(): Promise<Post[]> {
        return this.postModel.find();
    }

    public async findOne(id: number): Promise<Post | null> {
        return this.postModel.findOneBy({ id });
    }

    public async update(id: number, dto: UpdatePostDto): Promise<Post | null> {
        await this.postModel.update(id, dto);
        return this.findOne(id);
    }

    public async remove(id: number): Promise<void> {
        await this.postModel.delete(id);
    }
}
