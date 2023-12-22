/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { usuarioController } from './usuarios.controller';
import { salvaDadosUsuario } from './usuario.repository';
import { ValidaEmail } from './validador/email.validator';
import { ValidandoIdUsuario } from './validador/idUsuario.validador';



@Module({
  controllers: [usuarioController],
  providers: [salvaDadosUsuario, ValidaEmail, ValidandoIdUsuario],
})
export class usuarioModule {}
