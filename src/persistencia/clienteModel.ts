import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';
import { Cliente } from '../entidades/cliente';

export const ClienteSchema = new Schema<Cliente>({
    nome: {type: String, required: true, minlength: 5, maxlength: 50},
    cep: {type: String, required: true, minlength: 8, maxlength: 8},
    logradouro: {type: String, required: true, minlength: 5, maxlength: 50},
    complemento: {type: String, required: true, minlength: 5, maxlength: 100},
    bairro: {type: String, required: true, minlength: 5, maxlength: 50},
    localidade: {type: String, required: true, minlength: 5, maxlength: 25},
    uf: {type: String, required: true, minlength: 2, maxlength: 2},
});

export const ClienteModel = model<Cliente>('Cliente', ClienteSchema, 'clientes');