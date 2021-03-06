import { LocacaoModel } from './locacaoModel';
import { Locacao } from '../entidades/locacao';
import { ObjectId } from 'mongoose';
import { Query } from 'mongoose';

export async function buscarPorUF(uf: string): Promise<Locacao[]> {
    let consulta =  LocacaoModel.find({"uf": {"$regex": uf, "$options": "i"}});
    return consulta.exec(); 
}

export async function buscarPorLocalidade(localidade: string): Promise<Locacao[]> {
    let consulta =  LocacaoModel.find({"localidade": {"$regex": localidade, "$options": "i"}});
    return consulta.exec(); 
}

export async function buscarPorCapacidade(capacidade: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.find({capacidade: {$gte: capacidade}});
    return consulta.exec(); 
} 

export async function buscarPorUfEPreco(uf: string, preco: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.where("uf").equals(uf).where("preco").lte(preco);
    return consulta.exec(); 
}

export async function buscarPorLocalidadeEPreco(localidade: string, preco: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.where("localidade").equals(localidade).where("preco").lte(preco);
    return consulta.exec(); 
}

export async function buscarPorUfECapacidade(uf: string, capacidade: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.where("uf").equals(uf).where("capacidade").gte(capacidade);
    return consulta.exec(); 
}

export async function buscarPorLocalidadeECapacidade(localidade: string, capacidade: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.where("localidade").equals(localidade).where("capacidade").gte(capacidade);
    return consulta.exec(); 
}

export async function buscarPorPreco(preco: number): Promise<Locacao[]> {
    let consulta = LocacaoModel.find({preco: {$lte: preco}});
    return consulta.exec();
}


export async function inserirLocacao(locacao: Locacao): Promise<Locacao> {
    return LocacaoModel.create(locacao);
}

export async function updateLocacao(id: string, locacao:Object): Promise<any> {
    return await LocacaoModel.findByIdAndUpdate(id, locacao);
}

export async function deletaLocacao(id: string, cpf: Object): Promise<any> {
    let consulta = await LocacaoModel.findById(id).where('cpf').equals(cpf);
    if(consulta){
        await LocacaoModel.findByIdAndDelete(id);
    }
}