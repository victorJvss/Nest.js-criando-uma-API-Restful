/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { produtosController } from './produtos.controller';
import { repositoryProdutos } from './produtos.repository';

@Module({
  controllers: [produtosController],
  providers: [repositoryProdutos]
})
export class produtosModulo {}
