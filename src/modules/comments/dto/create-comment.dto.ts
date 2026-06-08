import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateCommentDto {
    @IsNumber()
    postId!: number;

    @IsString()
    @IsNotEmpty()
    text!: string;

    @IsNumber()
    @Min(1)
    @Max(5)
    rating!: number;

    @IsString()
    @IsNotEmpty()
    author!: string;
}

