import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';
import { DateTime } from '../entidades/dateTime';

export const DateTimeSchema = new Schema<DateTime>({
    date_point: {type: Date, required: true, default: new Date()},
    check_in: {type: Date, required: true, default: new Date()},
    check_out: {type: Date, required: true, default: new Date()},
})

export const DateTimeModel = model<DateTime>('DateTime', DateTimeSchema, 'date_time');