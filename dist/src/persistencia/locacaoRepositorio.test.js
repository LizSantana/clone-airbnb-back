"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const locacaoModel_1 = require("./locacaoModel");
const locacaoRepositorio = __importStar(require("./locacaoRepositorio"));
const dbhandler_1 = __importDefault(require("../utils/dbhandler"));
jest.setTimeout(600000);
/**
 * Conectar com o banco de dados antes de qualquer teste.
 */
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield dbhandler_1.default.open();
}));
/**
 * Limpar o banco de dados depois de cada teste.
 */
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield dbhandler_1.default.clear();
}));
/**
 * Desconectar do banco de dados após todos os testes.
 */
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield dbhandler_1.default.close();
}));
describe('MoedaRepositorio', () => {
    const locacaoDeTeste = {
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
        proprietario: { nome: 'Luis Marcio', cpf: '12345678528', email: "luismarcio@mainModule.com", phone: "(11)98576-2611" },
        capacidade: 4,
        ultimo_update: new Date(),
        urlImage: "https://a0.muscache.com/im/pictures/miso/Hosting-52853474/original/36099e51-dad1-4a02-8755-32d0a8458052.jpeg?im_w=960",
        check_in: "18/11/2021",
        check_out: "19/11/2021",
        cliente: {
            nome: "Carolina Dias",
            cpf: "02345678911",
            email: "calola@mail.com",
            phone: "(11)98576-2611"
        }
    };
    describe('criar() integração', () => {
        test('deve inserir locacao sem erro', () => __awaiter(void 0, void 0, void 0, function* () {
            expect(() => __awaiter(void 0, void 0, void 0, function* () {
                yield locacaoRepositorio.inserirLocacao(locacaoDeTeste);
            })).not.toThrow();
        }));
        test('deve iserir locacao e obter objeto inserido no bd', () => __awaiter(void 0, void 0, void 0, function* () {
            const moedaInserida = yield locacaoRepositorio.inserirLocacao(locacaoDeTeste);
            expect(moedaInserida.locacao_nome).toBe(locacaoDeTeste.locacao_nome);
            expect(moedaInserida.proprietario).toBe(locacaoDeTeste.proprietario);
            expect(moedaInserida.cep).toBe(locacaoDeTeste.cep);
        }));
    });
    describe('buscarPorUF() integração', () => {
        test('deve retornar uma coleção vazia', () => __awaiter(void 0, void 0, void 0, function* () {
            const locacao = yield locacaoRepositorio.buscarPorUF('RS');
            expect(locacao).toBeDefined();
            expect(locacao).toHaveLength(0);
        }));
        test('deve retornar uma coleção com 2 elementos', () => __awaiter(void 0, void 0, void 0, function* () {
            yield seedLocacoes();
            const locacao = yield locacaoRepositorio.buscarPorUF('RS');
            expect(locacao).toBeDefined();
            expect(locacao).toHaveLength(2);
        }));
    });
});
//OS TESTES PARA OS MÉTODOS DE UPDATE E DELETE NÃO FORAM FEITOS
function seedLocacoes() {
    return __awaiter(this, void 0, void 0, function* () {
        yield locacaoModel_1.LocacaoModel.create({
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
            proprietario: { nome: 'Luis Marcio', cpf: '12345678528', email: "luismarcio@mainModule.com", phone: "(11)98576-2611" },
            capacidade: 4,
            ultimo_update: new Date(),
            urlImage: "https://a0.muscache.com/im/pictures/miso/Hosting-52853474/original/36099e51-dad1-4a02-8755-32d0a8458052.jpeg?im_w=960",
            check_in: "18/11/2021",
            check_out: "19/11/2021",
            cliente: {
                nome: "Carolina Dias",
                cpf: "02345678911",
                email: "calola@mail.com",
                phone: "(11)98576-2611"
            }
        });
        yield locacaoModel_1.LocacaoModel.create({
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
            proprietario: { nome: 'Luis Marcio', cpf: '12345678528', email: "luismarcio@mainModule.com", phone: "(11)98576-2611" },
            capacidade: 4,
            ultimo_update: new Date(),
            urlImage: "https://a0.muscache.com/im/pictures/miso/Hosting-52853474/original/36099e51-dad1-4a02-8755-32d0a8458052.jpeg?im_w=960",
            check_in: "18/11/2021",
            check_out: "19/11/2021",
            cliente: {
                nome: "Carolina Dias",
                cpf: "02345678911",
                email: "calola@mail.com",
                phone: "(11)98576-2611"
            }
        });
    });
}
//# sourceMappingURL=locacaoRepositorio.test.js.map