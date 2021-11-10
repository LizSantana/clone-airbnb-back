import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';

export interface Recibo {
    cliente_id: ObjectId;
    data_pagamento: Date;
    dias_reserva: number;
    montante: number;
}

export const ReciboSchema = new Schema<Recibo>({
    cliente_id: {type: SchemaTypes.ObjectId, required: true},
    data_pagamento: {type: Date, required: true, default: new Date(Date.now()+7*24*60*60*1000)},
    dias_reserva: {type: Number, required: true, min:1},
    montante:{type:Number, required:true, min:1}
});

export const LocacaoModel = model<Recibo>('Recibo', ReciboSchema, 'recibos');