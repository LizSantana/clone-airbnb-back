import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';
import { Pessoa } from '../entidades/pessoa';

export const PessoaSchema = new Schema<Pessoa>({
    login: {
        email: {type: String, required: true, minlength: 8, maxlength: 50},
        senha: {type: String, required: true, minlength: 5, maxlength: 50}
    }
});

export const PessoaModel = model<Pessoa>('Pessoa', PessoaSchema, 'pessoa');