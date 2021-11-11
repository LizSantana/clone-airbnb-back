import { ReservasModel } from './reservasModel';
import { Reservas } from '../entidades/reservas';
import { ObjectId, Types } from 'mongoose';

export async function buscarPorUF(uf: string): Promise<Reservas[]> {
    let consulta = ReservasModel.where('uf').equals(uf);
    return consulta.exec(); 
}

export async function buscarPorLocalidade(localidade: string): Promise<Reservas[]> {
    let consulta = ReservasModel.where('localidade').equals(localidade);
    return consulta.exec(); 
}

export async function buscarPorCapacidade(capacidade: number): Promise<Reservas[]> {
    let consulta = ReservasModel.where('capacidade').equals(capacidade);
    return consulta.exec(); 
} 


export async function buscarPorPreco(preco: number): Promise<Reservas[]> {
    let consulta = ReservasModel.find({preco: {$lte: preco}});
    return consulta.exec();
}

export async function status(objectId: string, data_inicio: Date, data_fim: Date) : Promise<boolean>{
    let consulta = await ReservasModel.findById(objectId).exec();
        if (consulta != null || consulta != undefined){
            return ((data_inicio < consulta.check_in || data_inicio > consulta.check_out) && data_fim < consulta.check_in);
    }
    return false;
}

export async function criarReserva(objectId: string, data_inicio: Date, data_fim: Date): Promise<boolean> {
    let consultaReserva = await ReservasModel.findById(objectId).exec();
    if (consultaReserva != null || consultaReserva != undefined){
       if( await status(objectId, data_inicio, data_fim)){
           consultaReserva.check_in = data_inicio;
           consultaReserva.check_out = data_fim;
           const reservaCriada = await consultaReserva.save();
           console.log(reservaCriada);
           return true;
       }
    } else {
        throw new Error('Reserva indisponível');
    }
    return false;
}