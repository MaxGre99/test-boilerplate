import { IsString, IsOptional, MinLength, IsNotEmpty } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePostDto {
    @ApiPropertyOptional({ example: 'Updated title', description: 'Post title' })
    @IsString()
    @IsOptional()
    @MinLength(3)
    @IsNotEmpty()
    title?: string;

    @ApiPropertyOptional({ example: 'Updated content', description: 'Post text' })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    text?: string;
}

