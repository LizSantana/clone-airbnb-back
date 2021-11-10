import { ObjectId } from 'mongoose';

export interface Reserva {
    locacao_id: ObjectId;
    proprietario_id: ObjectId;
    cliente_id: ObjectId;
    recibos_id: ObjectId;
    data_inicio: Date;
    data_fim: Date;
}
