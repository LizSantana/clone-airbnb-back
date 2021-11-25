import {LocacaoModel} from './locacaoModel';
import { Locacao } from '../entidades/locacao';
import * as locacaoRepositorio from './locacaoRepositorio';
import db from '../utils/dbhandler';

jest.setTimeout(600000);

/**
 * Conectar com o banco de dados antes de qualquer teste.
 */
 
 beforeAll(async () => {
     await db.open();
    });
    
/**
 * Limpar o banco de dados depois de cada teste.
 */
 afterEach(async () => {
     await db.clear();
    });

/**
 * Desconectar do banco de dados após todos os testes.
 */
afterAll(async () => {
    await db.close();
});

describe('MoedaRepositorio', () => {
    const locacaoDeTeste: Locacao = {
            locacao_nome: 'Chalé em Ubatuba próximo à famosa praia do Lázaro!',
            cep: "17510985",
            logradouro: "Rua São Domingos",
            complemento: "Chalé",
            bairro: "Ribeira",
            localidade: "Ubatuba",
            uf: "SP",
            descricao_longa: "Chalé totalmente equipado, com café da manhã incluso, WiFi, 2 camas de casal",
            descricao_curta: "Chalé totalmente equipado em Ubatuba",
            preco: 270.00,
            proprietario: {nome: 'Luis Marcio', cpf: '12345678528', email: "luismarcio@mainModule.com", phone:"(11)98576-2611"},
            capacidade: 4,
            ultimo_update: new Date(),
            urlImage: "https://a0.muscache.com/im/pictures/miso/Hosting-52853474/original/36099e51-dad1-4a02-8755-32d0a8458052.jpeg?im_w=960",
            check_in: "18/11/2021",
            check_out: "19/11/2021",
            cliente: { 
                nome: "Carolina Dias",
                cpf: "02345678911",
                email:"calola@mail.com",
                phone: "(11)98576-2611"
        }

            };

    describe('criar() integração', () => {
        test('deve inserir locacao sem erro', async () => {
            expect(async () => {
                await locacaoRepositorio.inserirLocacao(locacaoDeTeste);
            }).not.toThrow();
        });
        test('deve iserir locacao e obter objeto inserido no bd', async () => {
            const moedaInserida = await locacaoRepositorio.inserirLocacao(locacaoDeTeste);
            expect(moedaInserida.locacao_nome).toBe(locacaoDeTeste.locacao_nome);
            expect(moedaInserida.proprietario).toBe(locacaoDeTeste.proprietario);
            expect(moedaInserida.cep).toBe(locacaoDeTeste.cep);
        });
    });
    describe('buscarPorUF() integração', () => {
        test('deve retornar uma coleção vazia', async () => {
            const locacao = await locacaoRepositorio.buscarPorUF('RS');
            expect(locacao).toBeDefined();
            expect(locacao).toHaveLength(0);
        });
        test('deve retornar uma coleção com 2 elementos', async () => {
            await seedLocacoes();
            const locacao = await locacaoRepositorio.buscarPorUF('RS');
            expect(locacao).toBeDefined();
            expect(locacao).toHaveLength(2);
        });
    });
});

//OS TESTES PARA OS MÉTODOS DE UPDATE E DELETE NÃO FORAM FEITOS

async function seedLocacoes() {
    await LocacaoModel.create({
        locacao_nome: 'Chalé em Ubatuba próximo à famosa praia do Lázaro!',
            cep: "17510985",
            logradouro: "Rua São Domingos",
            complemento: "Chalé",
            bairro: "Ribeira",
            localidade: "Ubatuba",
            uf: "RS",
            descricao_longa: "Chalé totalmente equipado, com café da manhã incluso, WiFi, 2 camas de casal",
            descricao_curta: "Chalé totalmente equipado em Ubatuba",
            preco: 270.00,
            proprietario: {nome: 'Luis Marcio', cpf: '12345678528', email: "luismarcio@mainModule.com", phone:"(11)98576-2611"},
            capacidade: 4,
            ultimo_update: new Date(),
            urlImage: "https://a0.muscache.com/im/pictures/miso/Hosting-52853474/original/36099e51-dad1-4a02-8755-32d0a8458052.jpeg?im_w=960",
            check_in: "18/11/2021",
            check_out: "19/11/2021",
            cliente: { 
                nome: "Carolina Dias",
                cpf: "02345678911",
                email:"calola@mail.com",
                phone: "(11)98576-2611"
            }
            });
    await LocacaoModel.create({
        locacao_nome: 'Chalé em Ubatuba próximo à famosa praia do Lázaro!',
            cep: "17510985",
            logradouro: "Rua São Domingos",
            complemento: "Chalé",
            bairro: "Ribeira",
            localidade: "Ubatuba",
            uf: "RS",
            descricao_longa: "Chalé totalmente equipado, com café da manhã incluso, WiFi, 2 camas de casal",
            descricao_curta: "Chalé totalmente equipado em Ubatuba",
            preco: 270.00,
            proprietario: {nome: 'Luis Marcio', cpf: '12345678528', email: "luismarcio@mainModule.com", phone:"(11)98576-2611"},
            capacidade: 4,
            ultimo_update: new Date(),
            urlImage: "https://a0.muscache.com/im/pictures/miso/Hosting-52853474/original/36099e51-dad1-4a02-8755-32d0a8458052.jpeg?im_w=960",
            check_in: "18/11/2021",
            check_out: "19/11/2021",
            cliente: { 
                nome: "Carolina Dias",
                cpf: "02345678911",
                email:"calola@mail.com",
                phone: "(11)98576-2611"
            }
    });
}