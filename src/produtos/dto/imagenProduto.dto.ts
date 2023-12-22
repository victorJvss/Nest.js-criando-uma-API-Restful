/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class imagenProduto{
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  descricao: string;
}