import * as locacaoController from '../controllers/locacao.controller'
import { LocacaoModel } from '../persistencia/locacaoModel';
import supertest from 'supertest';
import app from '../app';

/*test('api retorna várias locações', () => {
    const resultado = 
})*/

describe('locacao.controller', () => {
        test('api retorna várias locações', async () => {
            const resultado = await supertest(app)
                .get('/api/locacao');
            expect(resultado.status).toBe(200);
            expect(resultado.body).toHaveReturned();
            //expect(mockConversor).toHaveBeenCalledWith('USD', 1);
        });
    });