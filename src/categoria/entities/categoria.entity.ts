import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: "tb_categorias" }) // CREATE TABLE tb_categorias()
export class Categoria {

    @PrimaryGeneratedColumn()// id INT AUTO_INCREMENT PRIMARY KEY
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty() // Validação dos dados do objeto
    @Column({ length: 255, nullable: false }) //VARCHAR(100) NOT NULL
    categoria: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];




}