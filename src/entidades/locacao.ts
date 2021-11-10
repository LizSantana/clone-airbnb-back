import { ObjectId } from 'mongoose';

export interface Locacao {
    locacao_nome: string;
    cep: string;
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    uf: string;
    descricao_longa: string;
    descricao_curta: string;
    preco: number;
    proprietario_id: ObjectId;
    capacidade: number;
    ultimo_update: Date;
}

