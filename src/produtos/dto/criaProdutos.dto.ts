/* eslint-disable prettier/prettier */

import { ArrayMinSize, IsArray, IsNotEmpty, IsPositive, MaxLength, ValidateNested } from "class-validator";
import { caracteristicasProduto } from "./caractProdutos.dto";
import { imagenProduto } from "./imagenProduto.dto";
import { Type } from "class-transformer";
import { IdValidado } from "src/usuarios/validador/idUsuario.validador";


export class produtoCriado{

  @IsNotEmpty()
  nome: string;
 
  @IsPositive()
  valor: number;

  @IsPositive()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @IsArray()
  @ValidateNested()
  @ArrayMinSize(2)
  @Type(() => caracteristicasProduto)
  caracteristicas: caracteristicasProduto[];
  
  @IsArray()
  @ValidateNested()
  @ArrayMinSize(1)
  @Type(() => imagenProduto)
  imagens: imagenProduto[]
  
  @IsNotEmpty()
  categoria: string;
  
  @IsNotEmpty()
  dataCriacao: string;
  
  @IsNotEmpty()
  dataAtualizacao: string;

  @IsNotEmpty()
  @IdValidado({message: 'Esse id de usuário não existe!'})
  idDoUsuario: string
}