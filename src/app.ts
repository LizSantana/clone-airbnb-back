import { router as locacaoRouter} from '../src/routes/locacao.routes';
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/', locacaoRouter);

export default app;
