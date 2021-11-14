import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { LocacaoModel } from '../persistencia/locacaoModel';
import * as locacaoRepositorio from '../persistencia/locacaoRepositorio';

export async function getLocacao(req: Request, res: Response) {
    const locacao = await LocacaoModel.find().lean();
    return res.json(locacao);
}

export async function getFiltragemPorUF(req: Request, res: Response) {
    const uf = req.params.uf;
    const resultado = await locacaoRepositorio.buscarPorUF(uf);
    return res.json(resultado);
}

export async function getFiltragemPorLocalidade(req: Request, res: Response) {
    const localidade = req.params.localidade;
    const resultado = await locacaoRepositorio.buscarPorLocalidade(localidade);
    return res.json(resultado);
}

export async function getFiltragemPorCapacidade(req: Request, res: Response) {
    const capacidade = parseInt(req.params.capacidade);
    const resultado = await locacaoRepositorio.buscarPorCapacidade(capacidade);
    return res.json(resultado);
}

export async function getFiltragemPorPreco(req:Request, res: Response) {
    const preco = parseInt(req.params.preco);
    const resultado = await locacaoRepositorio.buscarPorPreco(preco);
    return res.json(resultado);
}

export async function postLocacao(req: Request, res: Response) {
  
    const erros = validationResult(req); 

    if (!erros.isEmpty()) {
       return res.status(400).json({erros: erros.array()});
    } else {
    const locacao = req.body;
    if (locacao) {
        await locacaoRepositorio.inserirLocacao(locacao);
       return res.send(locacao);
    }
    }
}

export function postAloValidado(req: Request, res: Response) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({erros: erros.array()});
    } else {
        const {nome} = req.body;
        return res.send(`Alô, ${nome}!`);
    }
}

export function getAloErro(req: Request, res: Response) {
    throw new Error('Algo deu errado!');
}