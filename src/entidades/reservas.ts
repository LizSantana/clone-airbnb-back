import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';

export interface Reserva {
    locacao_id: ObjectId;
    proprietario_id: ObjectId;
    cliente_id: ObjectId;
    recibos_id: ObjectId;
    data_inicio: Date;
    data_fim: Date;
}

export const ReservaSchema = new Schema<Reserva>({
    locacao_id: {type: SchemaTypes.ObjectId, required: true},
    proprietario_id: {type: SchemaTypes.ObjectId, required: true},
    cliente_id: {type: SchemaTypes.ObjectId, required: true},
    recibos_id: {type: SchemaTypes.ObjectId, required: true},
    data_inicio: {type: Date, required: true, default: new Date()},
    data_fim: {type: Date, required: true, default: new Date()},
});

export const LocacaoModel = model<Reserva>('Reserva', ReservaSchema, 'reservas');