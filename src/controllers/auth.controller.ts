import passport from "passport";
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as pessoaRepositorio from '../persistencia/pessoaRepositorio';
import jwt from 'jsonwebtoken';

/*export function login(req: Request, res: Response, next: NextFunction) {
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
}*/

/*function verifyJWT(req: Request, res: Response, next: NextFunction){
    const token: any = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET ||  "senha-forte", function(err: Error, decoded: String) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.body._id = decoded._id;
      next();
    });
}*/
export async function cadastro(req: Request, res: Response) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() });
    } else {
        const cadastro = req.body;
        if (cadastro) {
            await pessoaRepositorio.criarCadastro(cadastro);
            return res.redirect(200, 'back');
        }
    }
}

export async function login(req: Request, res: Response) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() });
    } else {
        try{
           const consulta =  await pessoaRepositorio.logar(req.body.email, req.body.senha);
           if (consulta) {
            const token = jwt.sign( req.body._id , process.env.SECRET ||  "senha-forte", {
            });
            return res.json({ auth: true, token: token });
            /*res.status(200).send({
                message: 'Login realizado com sucesso!'
            })*/
          }
        
    } catch (error) {
        console.log(error);
        res.status(401).end();
        res.status(500).json({message: 'Login inválido!'});
            /* res.status(500).send({ message: 'Falha ao realizar locacao' });*/
        }
    
        /*const login = req.body;
        if (login) {
            await pessoaRepositorio.criarCadastro(login);
            return res.redirect('back');
        }*/
    }
}
