import { IsString, IsNotEmpty, IsNumber, Min, Max, IsOptional } from 'class-validator';
import { IsTextRequiredForRating } from '../validators/is-text-required-for-rating.validator';

export class CreateCommentDto {
    @IsNumber()
    postId!: number;

    @IsOptional()
    @IsString()
    @IsTextRequiredForRating()
    text?: string;

    @IsNumber()
    @Min(1)
    @Max(5)
    rating!: number;

    @IsString()
    @IsNotEmpty()
    author!: string;
}

