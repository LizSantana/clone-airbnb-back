import passport from "passport";
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as pessoaRepositorio from '../persistencia/pessoaRepositorio';
import jwt from 'jsonwebtoken';

export function login(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('login', (err, user, info) => {
        try {
            if (err || !user) {
                return next(err);
            }
            req.login(user, { session: false }, (err) => {
                if (err) {
                    return next(err);
                }
                //gerar token JWT
                const token = jwt.sign(
                    { user: user.user },
                    'minha-chave-secreta-obtida-arquivo-configuracao-na-producao'
                );
                return res.json({authtoken: token});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
}

export async function postCadastro(req: Request, res: Response) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() });
    } else {
        const cadastro = req.body;
        if (cadastro) {
            await pessoaRepositorio.criarCadastro(cadastro);
            return res.redirect('back');
        }
    }
}

export async function postLogin(req: Request, res: Response) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() });
    } else {
        try{
            await pessoaRepositorio.logar(req.params.id, req.body.email, req.body.senha);
            res.end();
        /*res.status(200).send({
            message: 'Login realizado com sucesso!'
        })*/

        } catch (error) {
            console.log(error);
            res.status(401).end();
            /* res.status(500).send({ message: 'Falha ao realizar locacao' });*/
        }
    
        /*const login = req.body;
        if (login) {
            await pessoaRepositorio.criarCadastro(login);
            return res.redirect('back');
        }*/
    }
}
