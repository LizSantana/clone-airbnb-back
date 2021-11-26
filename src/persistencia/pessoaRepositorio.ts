import { Pessoa } from '../entidades/pessoa';
import { PessoaModel } from './pessoaModel';

export async function criarCadastro(cadastro: Pessoa): Promise<Pessoa> {
    return await PessoaModel.create(cadastro);
}


export async function logar(id: string, email: Object, senha: Object): Promise<any> {
   // let consulta = await PessoaModel.findById(id).where('email').equals(email);
   let consulta = await PessoaModel.where('email').equals(email).where('senha').equals(senha);
   console.log(PessoaModel.where('email').equals(email).where('senha').equals(senha));
    /*if(consulta){

    }*/
}