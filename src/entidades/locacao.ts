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
    proprietario: {
        nome: string;
        cpf: string;
        email: string;
        phone: string;
    };
    capacidade: number;
    ultimo_update: Date;
    urlImage: string;
    check_in?: String;
    check_out?: String;
    cliente?: {
        nome?: string;
        cpf?: string;
        email?: string;
        phone?: string;
    };
}

