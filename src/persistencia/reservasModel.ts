import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';
import { Reservas } from '../entidades/reservas';
 
export const ReservasSchema = new Schema<Reservas>({
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
    proprietario: {
        nome: {type:String, required:true},
        cpf: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true}
    },
    capacidade: {type: Number, required: true, min: 1},
    ultimo_update: {type: Date, required: true, default: new Date()},
    check_in: {type: Date, required: true, default: new Date()},
    check_out: {type: Date, required: true, default: new Date()},
});

export const ReservasModel = model<Reservas>('Reservas', ReservasSchema, 'reservas');