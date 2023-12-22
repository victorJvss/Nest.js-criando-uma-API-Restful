/* eslint-disable prettier/prettier */

import { caracteristicasProduto } from "./dto/caractProdutos.dto";
import { imagenProduto } from "./dto/imagenProduto.dto";

export class produtoEntity {
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: caracteristicasProduto[];
  imagens: imagenProduto[];
  categoria: string;
  dataCriacao: string;
  dataAtualizacao: string;
  idDoUsuario: string;
}
