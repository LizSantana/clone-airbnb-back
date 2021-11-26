import { JsonWebTokenError } from 'jsonwebtoken';
import { Pessoa } from '../entidades/pessoa';
import { PessoaModel } from './pessoaModel';
import jwt from 'jsonwebtoken';

export async function criarCadastro(cadastro: Pessoa): Promise<Pessoa> {
    return await PessoaModel.create(cadastro);
}


export async function logar(email: Object, senha: Object): Promise<any> {
   // let consulta = await PessoaModel.findById(id).where('email').equals(email);
   let consulta = await PessoaModel.where('email').equals(email).where('senha').equals(senha);
   console.log(PessoaModel.where('email').equals(email).where('senha').equals(senha));
   return consulta;
}