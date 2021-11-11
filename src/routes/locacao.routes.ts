import { Router } from 'express';
import { body } from 'express-validator';
import * as LocacaoController from '../controllers/locacao.controller';


export const router = Router();
export const path = '/locacao';
router.get(path, LocacaoController.getLocacao);
//router.get(`${path}/erro`, AloController.getAloErro);
router.get(`${path}/:uf`, LocacaoController.getFiltragemPorUF);
router.get(`${path}/:localidade`, LocacaoController.getFiltragemPorLocalidade);
router.get(`${path}/:capacidade`, LocacaoController.getFiltragemPorCapacidade);
router.get(`${path}/:preco`, LocacaoController.getFiltragemPorPreco);
/*router.post(`${path}/validado`,
            body('nome').notEmpty().trim().isLength({min:1, max:25}).withMessage('Nome deve ter entre 1 e 25 caracteres'),
            AloController.postAloValidado);*/