import { ObjectId } from 'mongoose';

export interface Reservas {
    id_locacao: string;
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
    check_in: Date;
    check_out: Date;
}

