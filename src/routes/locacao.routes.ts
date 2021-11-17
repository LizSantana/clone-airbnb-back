import { NextFunction, Router } from 'express';
import { body } from 'express-validator';
import * as LocacaoController from '../controllers/locacao.controller';
import uploads from '../upload';

export const router = Router();
export const path = '/locacao';
router.get(path, LocacaoController.getLocacao);
router.get(`${path}/uf/:uf`, LocacaoController.getFiltragemPorUF);
router.get(`${path}/localidade/:localidade`, LocacaoController.getFiltragemPorLocalidade);
router.get(`${path}/capacidade/:capacidade`, LocacaoController.getFiltragemPorCapacidade);
router.get(`${path}/preco/:preco`, LocacaoController.getFiltragemPorPreco);
router.post(`${path}/criarlocacao`,
            LocacaoController.postLocacao);
router.post(`${path}/:id`, LocacaoController.putLocacao);
router.post(`${path}/:id/deletarlocacao`, LocacaoController.deleteLocacao);
