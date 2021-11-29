import { NextFunction, Router } from 'express';
import { body } from 'express-validator';
import * as LocacaoController from '../controllers/locacao.controller';
import * as AuthController from '../controllers/auth.controller';
import { verifyJWT} from '../controllers/auth.controller';
import uploads from '../upload';
import passport from 'passport';

export const router = Router();
export const path = '/locacao';
router.get(path, LocacaoController.getLocacao);
router.get(`${path}/uf`, LocacaoController.getUf);
//router.get(`${path}/erro`, AloController.getAloErro);
router.get(`${path}/uf/:uf`, LocacaoController.getFiltragemPorUF);
// router.get(`${path}/:uf?uf:capacidade?capacidade`, LocacaoController.getFiltragemPorUFCapacidade)
router.get(`${path}/localidade/:localidade`, LocacaoController.getFiltragemPorLocalidade);
router.get(`${path}/capacidade/:capacidade`, LocacaoController.getFiltragemPorCapacidade);
router.get(`${path}/preco/:preco`, LocacaoController.getFiltragemPorPreco);
router.get(`${path}/uf/:uf/preco/:preco`,
            LocacaoController.getFiltragemPorUfEPreco);
router.post(`${path}/criarlocacao`, verifyJWT,
            LocacaoController.postLocacao);
router.post(`${path}/:id`,verifyJWT, LocacaoController.putLocacao);
router.post(`${path}/:id/deletarlocacao`,verifyJWT, LocacaoController.deleteLocacao);
router.post('/cadastro', AuthController.cadastro);
router.post('/login', AuthController.login);
router.get('/pessoas', AuthController.getPessoas)
