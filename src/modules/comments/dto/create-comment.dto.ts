import { IsString, IsNotEmpty, IsNumber, Min, Max, IsOptional } from 'class-validator';
import { IsTextRequiredForRating } from '../validators/is-text-required-for-rating.validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty({ example: 1, description: 'Post ID' })
    @IsNumber()
    postId!: number;

    @ApiPropertyOptional({ example: 'Great post!', description: 'Comment text, required if rating is 2-4 (min 10 chars)' })
    @IsOptional()
    @IsString()
    @IsTextRequiredForRating()
    text?: string;

    @ApiProperty({ example: 5, description: 'Rating from 1 to 5', minimum: 1, maximum: 5 })
    @IsNumber()
    @Min(1)
    @Max(5)
    rating!: number;

    @ApiProperty({ example: 'Max', description: 'Comment author' })
    @IsString()
    @IsNotEmpty()
    author!: string;
}

