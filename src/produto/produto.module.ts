import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { CategoriaModule } from "../categoria/categoria.module";
import { ProdutoController } from "./controllers/produto.controller";
import { ProdutoService } from "./services/produto.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule{}