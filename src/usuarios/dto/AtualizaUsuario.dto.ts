/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailValidado } from "../validador/email.validator";


export class AtualizaUsuarioTdo{
    @IsNotEmpty({message: 'O nome não pode ser vazio!'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {message: 'O e-mail tem que ser válido'})
    @EmailValidado({message: 'Esse e-mail já foi cadastrado'})
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha tem que ter pelo menos 6 caracter'})
    @IsOptional()
    senha: string;
}