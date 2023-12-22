/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { produtoEntity } from "./produto.entity";

@Injectable()
export class repositoryProdutos {
    private armazenamento: produtoEntity[] = []

    async salvaProdutos(dadosProdutos: produtoEntity){
        this.armazenamento.push(dadosProdutos);
        console.log(this.armazenamento);
    }

    async todosOsProdutos(){
        return this.armazenamento
    }

    async produtoAtualizado(id: string, dadosProdutos: Partial<produtoEntity>){
        const pesquisaProduto = this.armazenamento.find(
            usuario => usuario.idDoUsuario === id
        )

        Object.entries(dadosProdutos).forEach(([chave, valor]) => {
            
            if(chave === 'idDoUsuario'){
                return;
            }

            pesquisaProduto[chave] = valor
        })

        return pesquisaProduto
    }
}
