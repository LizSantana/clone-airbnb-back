import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';

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

export const LocacaoSchema = new Schema<Locacao>({
    locacao_nome: {type: String, required: true, minlength: 5, maxlength: 50},
    cep: {type: String, required: true, minlength: 8, maxlength: 8},
    logradouro: {type: String, required: true, minlength: 5, maxlength: 50},
    complemento: {type: String, required: true, minlength: 5, maxlength: 100},
    bairro: {type: String, required: true, minlength: 5, maxlength: 50},
    localidade: {type: String, required: true, minlength: 5, maxlength: 25},
    uf: {type: String, required: true, minlength: 2, maxlength: 2},
    descricao_longa: {type: String, required: true, minlength: 5, maxlength: 250},
    descricao_curta: {type: String, required: true, minlength: 5, maxlength: 50},
    preco: {type: Number, required: true, min: 0},
    proprietario_id: {type: SchemaTypes.ObjectId, required: true},
    capacidade: {type: Number, required: true, min: 1},
    ultimo_update: {type: Date, required: true, default: new Date()},
});

export const LocacaoModel = model<Locacao>('Locacao', LocacaoSchema, 'locacoes');