import { IsString, IsOptional, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';
import { IsTextRequiredForRating } from '../validators/is-text-required-for-rating.validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCommentDto {
    @ApiPropertyOptional({ example: 'Updated text', description: 'Comment text, required if rating is 2-4 (min 10 chars)' })
    @IsOptional()
    @IsString()
    @IsTextRequiredForRating()
    text?: string;

    @ApiPropertyOptional({ example: 4, description: 'Rating from 1 to 5', minimum: 1, maximum: 5 })
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(5)
    rating?: number;

    @ApiPropertyOptional({ example: 'Max', description: 'Author name' })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    author?: string;
}

