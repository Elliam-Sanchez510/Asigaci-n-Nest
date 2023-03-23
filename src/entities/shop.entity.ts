import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator/types/decorator/decorators';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'text'})
    tittle: string;

    @Column({type: 'numeric'})
    price?: number;

    @Column({type: 'text'})
    description?: string;

    @Column({type: 'text'})
    slug?: string;

    @Column({type: 'numeric'})
    stock?: number;

    @Column({type: 'text'})
    gender?: string;
}