import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';
import { Reserva } from '../entidades/reserva';

export const ReservaSchema = new Schema<Reserva>({
    locacao_id: {type: SchemaTypes.ObjectId, required: true},
    proprietario_id: {type: SchemaTypes.ObjectId, required: true},
    cliente_id: {type: SchemaTypes.ObjectId, required: true},
    recibos_id: {type: SchemaTypes.ObjectId, required: true},
    data_inicio: {type: Date, required: true, default: new Date()},
    data_fim: {type: Date, required: true, default: new Date()},
});

export const ReservaModel = model<Reserva>('ReservaPorId', ReservaSchema, 'reservas-por-id');