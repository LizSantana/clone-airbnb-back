import passport from 'passport';
import passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';

const LocalStrategy = passportLocal.Strategy;

passport.use('login', new LocalStrategy((email, senha, done) => {
    //Implementar toda a lógica de autenticação
    if (email !== 'email') {
        return done(undefined, false, { message: 'Usuário ou senha inválidos' });
    }
    if (senha !== 'senha') {
        return done(undefined, false, { message: 'Usuário ou senha inválidos' });
    }
    return done(undefined, {email: email, senha: senha});
}));

const JWTStrategy = passportJWT.Strategy;

passport.use('jwt', new JWTStrategy({
    secretOrKey: 'minha-chave-secreta-obtida-arquivo-configuracao-na-producao',
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    (payload, done) => {
        try {
            return done(undefined, payload.user);
        } catch (error) {
            done(error);
        }
    }
));