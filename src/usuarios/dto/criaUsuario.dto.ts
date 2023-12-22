/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailValidado } from "../validador/email.validator";


export class criandoUsuarioTdo{
    @IsNotEmpty({message: 'O nome não pode ser vazio!'})
    nome: string;

    @IsEmail(undefined, {message: 'O e-mail tem que ser válido'})
    @EmailValidado({message: 'Esse e-mail já foi cadastrado'})
    email: string;

    @MinLength(6, { message: 'A senha tem que ter pelo menos 6 caracter'})
    senha: string;
}