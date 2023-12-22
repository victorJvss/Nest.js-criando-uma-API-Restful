/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuarios.entity";


@Injectable()
export class salvaDadosUsuario {
  private usuarios: UsuarioEntity[] = [];

   async salvaUsuario(dadosUsuario: UsuarioEntity) {
    this.usuarios.push(dadosUsuario);
    console.log(this.usuarios);
  }

  async listaUsuarios(){
    return this.usuarios
  }

  async validaUsuario(email: string){
    const validaUsuario = this.usuarios.find(usuario => usuario.email === email);

    return validaUsuario != undefined
  }

  async validaIdUsuario(id: string){
    const validandoId = this.usuarios.find(usuario => usuario.id === id);
    
    return validandoId != undefined
}

  private buscaIdUsuario(id:string){
    const possivelUsuario = this.usuarios.find(
      usuario => usuario.id === id
    )

    if(!possivelUsuario){
      return 'Esse usuario não existe!'
    }

    return possivelUsuario;
  }

  async atualizaUsuario(id:string, dadosUsuario: Partial<UsuarioEntity>){
   
    const usuario = this.buscaIdUsuario(id)

    Object.entries(dadosUsuario).forEach(([chave, valor]) => {
      if(chave === 'id'){
        return;
      }

      usuario[chave] = valor;
    })

    return usuario;

  }

  async removeUsuario(id:string){
    const usuario = this.buscaIdUsuario(id);
    this.usuarios = this.usuarios.filter(user => user.id != id )

    return usuario;
  }
}

