/* eslint-disable prettier/prettier */

import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsPositive, MaxLength, ValidateNested } from "class-validator";
import { caracteristicasProduto } from "./caractProdutos.dto";
import { imagenProduto } from "./imagenProduto.dto";
import { Type } from "class-transformer";
import { IdValidado } from "src/usuarios/validador/idUsuario.validador";


export class produtoCriado{

  @IsNotEmpty()
  @IsOptional()
  nome: string;
 
  @IsPositive()
  @IsOptional()
  valor: number;

  @IsPositive()
  @IsOptional()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  @MaxLength(1000)
  @IsOptional()
  descricao: string;

  @IsArray()
  @ValidateNested()
  @ArrayMinSize(2)
  @Type(() => caracteristicasProduto)
  @IsOptional()
  caracteristicas: caracteristicasProduto[];
  
  @IsArray()
  @ValidateNested()
  @ArrayMinSize(1)
  @Type(() => imagenProduto)
  @IsOptional()
  imagens: imagenProduto[]
  
  @IsNotEmpty()
  @IsOptional()
  categoria: string;
  
  @IsNotEmpty()
  @IsOptional()
  dataCriacao: string;
  
  @IsNotEmpty()
  @IsOptional()
  dataAtualizacao: string;

  @IsNotEmpty()
  @IdValidado({message: 'Esse id de usuário não existe!'})
  @IsOptional()
  idDoUsuario: string
}