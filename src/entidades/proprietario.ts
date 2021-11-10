import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';

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

export const ProprietarioSchema = new Schema<Proprietario>({
    nome: {type: String, required: true, minlength: 5, maxlength: 50},
    cpf: {type: String, required: true, minlength: 11, maxlength: 11},
    cep: {type: String, required: true, minlength: 8, maxlength: 8},
    logradouro: {type: String, required: true, minlength: 5, maxlength: 50},
    complemento: {type: String, required: true, minlength: 5, maxlength: 100},
    bairro: {type: String, required: true, minlength: 5, maxlength: 50},
    localidade: {type: String, required: true, minlength: 5, maxlength: 25},
    uf: {type: String, required: true, minlength: 2, maxlength: 2},
});

export const ProprietarioModel = model<Proprietario>('Proprietario', ProprietarioSchema, 'proprietarios');