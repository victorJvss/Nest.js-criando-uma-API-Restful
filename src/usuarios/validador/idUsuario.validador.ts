/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { salvaDadosUsuario } from "src/usuarios/usuario.repository";

@Injectable()
@ValidatorConstraint({async: true})
export class ValidandoIdUsuario implements ValidatorConstraintInterface{
    constructor(private usuarioRespository: salvaDadosUsuario){}
    
    async validate(value: any,): Promise<boolean> {
        const idValidado = await this.usuarioRespository.validaIdUsuario(value);
        
        return idValidado
    }
}
    export const IdValidado = (opcoesUsuario: ValidationOptions) => {
        return (object: object, propriedade: string) => {
            registerDecorator({
                target: object.constructor,
                propertyName: propriedade,
                options: opcoesUsuario,
                constraints: [],
                validator: ValidandoIdUsuario
            })
        }
    }

