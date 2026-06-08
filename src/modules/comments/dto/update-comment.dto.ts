import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class UpdateCommentDto {
    @IsString()
    @IsOptional()
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
