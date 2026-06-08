import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';
import { IsTextRequiredForRating } from '../validators/is-text-required-for-rating.validator';

export class UpdateCommentDto {
    @IsOptional()
    @IsString()
    @IsTextRequiredForRating()
    text?: string;

    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(5)
    rating?: number;

    @IsString()
    @IsOptional()
    author?: string;
}
