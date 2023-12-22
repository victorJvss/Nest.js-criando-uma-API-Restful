/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { repositoryProdutos } from './produtos.repository';
import { produtoCriado } from './dto/criaProdutos.dto';
import { AtualizaUsuarioTdo } from 'src/usuarios/dto/AtualizaUsuario.dto';


@Controller('/produtos')
export class produtosController {

   constructor(private repository: repositoryProdutos){}
  
  @Post()
  async enviaProdutos(@Body() produtos: produtoCriado) {
    this.repository.salvaProdutos(produtos);
    return produtos
  }

  @Get()
  async listaProdutos(){
    return this.repository.todosOsProdutos()
  }

  @Put('/:id')
  async atualizaProduto(@Param('id') id: string, @Body() dadosProdutos: AtualizaUsuarioTdo){
    const possivelProduto = await this.repository.produtoAtualizado(id, dadosProdutos)

    return possivelProduto
  }
}
