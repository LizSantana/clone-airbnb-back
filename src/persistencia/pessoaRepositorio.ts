import { JsonWebTokenError } from 'jsonwebtoken';
import { Pessoa } from '../entidades/pessoa';
import { PessoaModel } from './pessoaModel';
import jwt from 'jsonwebtoken';

export async function criarCadastro(cadastro: Pessoa): Promise<Pessoa> {
    return await PessoaModel.create(cadastro);
}


export async function logar(pessoa: Pessoa): Promise<any> {
   // let consulta = await PessoaModel.findById(id).where('email').equals(email);
   let consulta = await PessoaModel.where('email').equals(pessoa.email).where('senha').equals(pessoa.senha);
   return consulta;
}

export async function retornaPessoa(pessoa: Pessoa): Promise<Pessoa[]>{
    let consulta =  PessoaModel.where('email').equals(pessoa.email);
    return consulta.exec();
}