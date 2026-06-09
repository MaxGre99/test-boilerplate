import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty({ example: 'My first post', description: 'Post title' })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title!: string;

    @ApiProperty({ example: 'Post content goes here', description: 'Post text' })
    @IsString()
    @IsNotEmpty()
    text!: string;
}
