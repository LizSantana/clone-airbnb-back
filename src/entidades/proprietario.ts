import { ObjectId } from 'mongoose';

export interface Proprietario {
    nome: string;
    cpf: string;
    cep: string;
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    uf: string;
}
