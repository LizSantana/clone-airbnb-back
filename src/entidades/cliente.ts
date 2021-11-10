import { ObjectId } from 'mongoose';

export interface Cliente {
    nome: string;
    cep: string;
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    uf: string;
}

