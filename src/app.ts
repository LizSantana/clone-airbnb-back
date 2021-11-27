import { router as locacaoRouter} from '../src/routes/locacao.routes';
import { router as authRouter, path as authPath} from '../src/routes/auth.routes';
import express, { urlencoded, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import errorHandler from 'errorhandler';
import passport from 'passport';

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(json());
app.use(passport.initialize());
app.use(urlencoded({extended: false}));
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
    app.use(errorHandler());
}else{
    app.use(morgan('tiny'));
}

app.use(`/api`, locacaoRouter);
// app.use(`/api${authPath}`, authRouter);

export default app;
