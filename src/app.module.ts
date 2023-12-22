import { Module } from '@nestjs/common';
import { usuarioModule } from './usuarios/usuario.module';
import { produtosModulo } from './produtos/produtos.module';

@Module({
  imports: [usuarioModule, produtosModulo],
})
export class AppModule {}
