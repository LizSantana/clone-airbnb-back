import { LocacaoModel } from './locacaoModel';
import { Locacao } from '../entidades/locacao';

export async function buscarPorUF(uf: string): Promise<Locacao[]> {
    let consulta = LocacaoModel.where('uf').equals(uf);
    return consulta.exec(); 
}

export async function buscarPorCapacidade(capacidade: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.where('capacidade').equals(capacidade);
    return consulta.exec(); 
} 


export async function buscarPorPreco(preco: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.find({preco: {$lte: preco}});
    return consulta.exec();
}
