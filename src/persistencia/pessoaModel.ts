import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';
import { Pessoa } from '../entidades/pessoa';

export const PessoaSchema = new Schema<Pessoa>({
        email: {type: String, required: true, minlength: 8, maxlength: 50, index: {unique: true}},
        senha: {type: String, required: true}
});

export const PessoaModel = model<Pessoa>('Pessoa', PessoaSchema, 'pessoa');