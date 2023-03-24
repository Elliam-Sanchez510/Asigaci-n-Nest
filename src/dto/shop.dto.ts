import { IsString } from "class-validator";
import { IsNotEmpty, MinLength, IsNumber, IsOptional } from "class-validator/types/decorator/decorators";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    tittle: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    price: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(15)
    @IsOptional()
    description: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    slug: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    stock: 0;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    gender: string;
}