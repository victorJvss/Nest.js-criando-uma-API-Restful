/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { salvaDadosUsuario } from './usuario.repository';
import { criandoUsuarioTdo } from './dto/criaUsuario.dto';
import { v4 as uuid} from 'uuid'
import { UsuarioEntity } from './usuarios.entity';
import { ListaUsuario } from './dto/ListaUsuarios.dto';
import { AtualizaUsuarioTdo } from './dto/AtualizaUsuario.dto';




@Controller('/usuarios')
export class usuarioController {
    
    constructor(private salvaDados: salvaDadosUsuario){}

    @Post()
    async usuarioEnviado(@Body() dadosEnviado: criandoUsuarioTdo){        
        const usuarioEntity = new UsuarioEntity()
        
        usuarioEntity.nome = dadosEnviado.nome
        usuarioEntity.email = dadosEnviado.email
        usuarioEntity.senha = dadosEnviado.senha
        usuarioEntity.id = uuid()
        
        this.salvaDados.salvaUsuario(usuarioEntity);
        
        return{ Usuario: usuarioEntity.id, message: 'Usuario criado com sucesso!' }
    }

    @Get()
    async mostraUsuarios(){
     const listaUsuario = await this.salvaDados.listaUsuarios()
     const usuariosProtegidos = listaUsuario.map(usuario => new ListaUsuario(
        usuario.id,
        usuario.nome
     ));

     return usuariosProtegidos
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() dadosUsuario: AtualizaUsuarioTdo){
        const usuarios = await this.salvaDados.atualizaUsuario(id, dadosUsuario)
        return {
            usuario: usuarios,
            message: 'Usuário atualizado com sucesso!'
        }
    }

    @Delete('/:id')
    async removendoUsuario(@Param('id') id: string ){
        const usuarioRemovido = await this.salvaDados.removeUsuario(id);

       return {
        usuario:usuarioRemovido
       }
    }
}
