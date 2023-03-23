import { IsString } from "class-validator";
import { IsNotEmpty, MinLength, IsNumber } from "class-validator/types/decorator/decorators";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    tittle: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(15)
    description: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsNumber()
    @IsNotEmpty()
    stock: 0;

    @IsString()
    @IsNotEmpty()
    gender: string;
}