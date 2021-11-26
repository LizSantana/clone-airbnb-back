import { ObjectId } from 'mongoose';

export interface Pessoa {
    login: {
        email: string;
        senha: string;
    }
}

