import { router as locacaoRouter} from '../src/routes/locacao.routes';
import express, { urlencoded, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import errorHandler from 'errorhandler';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(json());
app.use(urlencoded({extended: false}));
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
    app.use(errorHandler());
}else{
    app.use(morgan('tiny'));
}

app.use(`/api`, locacaoRouter);

export default app;
