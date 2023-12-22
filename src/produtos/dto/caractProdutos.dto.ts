/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class caracteristicasProduto{
  
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  descricao: string;
}