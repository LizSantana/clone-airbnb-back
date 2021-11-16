import { LocacaoModel } from './locacaoModel';
import { Locacao } from '../entidades/locacao';
import { ObjectId } from 'mongoose';
import { Query } from 'mongoose';

export async function buscarPorUF(uf: string): Promise<Locacao[]> {
    let consulta = LocacaoModel.where('uf').equals(uf);
    return consulta.exec(); 
}

export async function buscarPorLocalidade(localidade: string): Promise<Locacao[]> {
    let consulta = LocacaoModel.where('localidade').equals(localidade);
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


export async function inserirLocacao(locacao: Locacao): Promise<Locacao> {
    return LocacaoModel.create(locacao);
}

export async function updateLocacao(id: ObjectId, locacao:Locacao): Promise<any> {
    let result = await LocacaoModel.findByIdAndUpdate(id,{
        $set: locacao
    });
    console.log(result);
    //let consulta = LocacaoModel.findByIdAndUpdate(id, locacao);
   // console.log("update no repositorio:", consulta);
   // console.log(LocacaoModel.findById(id))
    //return consulta;
}