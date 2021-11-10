import { Schema, model, ObjectId, SchemaTypes} from 'mongoose';

export interface DateTime{
    date_point: Date;
    check_in: Date;
    check_out: Date;
}

export const DateTimeSchema = new Schema<DateTime>({
    date_point: {type: Date, required: true, default: new Date()},
    check_in: {type: Date, required: true, default: new Date()},
    check_out: {type: Date, required: true, default: new Date()},
})

export const DateTimeModel = model<DateTime>('DateTime', DateTimeSchema, 'date_time');