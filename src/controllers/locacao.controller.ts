import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { LocacaoModel } from '../persistencia/locacaoModel';
import { ObjectId } from 'mongoose';
import * as locacaoRepositorio from '../persistencia/locacaoRepositorio';
import { request } from 'http';

export async function getLocacao(req: Request, res: Response) {
    const locacao = await LocacaoModel.find().lean();
    return res.json(locacao);
}

export async function getUf(req: Request, res: Response) {
    //const locacao = await LocacaoModel.find({}).select("uf -_id");
    const locacao = await LocacaoModel.find({}).distinct("uf");
    return res.json(locacao);
    console.log(locacao);
}

export async function getFiltragemPorUF(req: Request, res: Response) {
    const uf = req.params.uf;
    const resultado = await locacaoRepositorio.buscarPorUF(uf);
    return res.json(resultado);
}

export async function getFiltragemPorUfEPreco(req: Request, res: Response) {
    const uf = req.params.uf;
    const preco = parseInt(req.params.preco);
    const resultado = await locacaoRepositorio.buscarPorUfEPreco(uf, preco);
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

export async function getFiltragemPorPreco(req: Request, res: Response) {
    const preco = parseInt(req.params.preco);
    const resultado = await locacaoRepositorio.buscarPorPreco(preco);
    return res.json(resultado);
}

export async function postLocacao(req: Request, res: Response) {

    const erros = validationResult(req);

    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() });
    } else {
        const locacao = req.body;
        if (locacao) {
            await locacaoRepositorio.inserirLocacao(locacao);
            return res.redirect('back');
        }
    }
}

export async function putLocacao(req: Request, res: Response) {
    try {
        await locacaoRepositorio.updateLocacao(req.params.id, req.body);
        /*res.status(200).send({
            message: 'Locacao atualizada com sucesso!'
        });*/
        res.redirect(200, 'back')
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Falha ao atualizar a locação' });
    }
}

export async function deleteLocacao(req: Request, res: Response) {
    try {
        await locacaoRepositorio.deletaLocacao(req.params.id, req.body);
        res.status(200).send({
            message: 'Locação deletada com sucesso!'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Falha ao deletar locacao' });
    }
}

export function postAloValidado(req: Request, res: Response) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() });
    } else {
        const { nome } = req.body;
        return res.send(`Alô, ${nome}!`);
    }
}

export function getAloErro(req: Request, res: Response) {
    throw new Error('Algo deu errado!');
}
