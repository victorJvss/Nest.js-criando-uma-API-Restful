/* eslint-disable prettier/prettier */

import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { salvaDadosUsuario } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class ValidaEmail implements ValidatorConstraintInterface{
    constructor(private usuarioRepository: salvaDadosUsuario){}
    
    async validate(value: any): Promise<boolean> {
        const usuarioValidado = await this.usuarioRepository.validaUsuario(value);
        return !usuarioValidado;
    }
}

export const EmailValidado = (opcoesUsuario?: ValidationOptions) => {
    return (obejto: object, propriedade: string) => {
        registerDecorator({
            target: obejto.constructor,
            propertyName: propriedade,
            options:opcoesUsuario,
            constraints: [],
            validator: ValidaEmail
        })
    }
}