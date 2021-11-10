import { ObjectId } from 'mongoose';

export interface Recibo {
    cliente_id: ObjectId;
    data_pagamento: Date;
    dias_reserva: number;
    montante: number;
}
