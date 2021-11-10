import { Schema, model, ObjectId, SchemaTypes, Aggregate} from 'mongoose';

export interface Reserva {
    locacao_id: Aggregate<Reserva>;
    proprietario_id: ObjectId;
    cliente_id: ObjectId;
    recibos_id: ObjectId;
    data_inicio: Date;
    data_fim: Date;
}

export const ReservaSchema = new Schema<Reserva>({
    locacao_id: {type: SchemaTypes.Mixed, required: true, ref: "Locacao"},
    proprietario_id: {type: SchemaTypes.ObjectId, required: true},
    cliente_id: {type: SchemaTypes.ObjectId, required: true},
    recibos_id: {type: SchemaTypes.ObjectId, required: true},
    data_inicio: {type: Date, required: true, default: new Date()},
    data_fim: {type: Date, required: true, default: new Date()},
});

export const ReservaModel = model<Reserva>('Reserva', ReservaSchema, 'reservas');
