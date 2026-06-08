import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title!: string;

    @IsString()
    @IsNotEmpty()
    text!: string;
}

