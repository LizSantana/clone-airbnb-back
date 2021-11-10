import { ObjectId } from 'mongoose';

export interface DateTime{
    date_point: Date;
    check_in: Date;
    check_out: Date;
}
