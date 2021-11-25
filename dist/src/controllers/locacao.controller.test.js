"use strict";
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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
/*test('api retorna várias locações', () => {
    const resultado =
})*/
describe('locacao.controller', () => {
    test('api retorna várias locações', () => __awaiter(void 0, void 0, void 0, function* () {
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .get('/api/locacao');
        expect(resultado.status).toBe(200);
        expect(resultado.body).toHaveReturned();
        expect(resultado.body).toHaveProperty(['locacao_nome', 'cep', 'logradouro',
            'complemento', 'bairro', 'localidade', 'uf', 'descricao_longa', 'descricao_curta',
            'preco', 'proprietario', 'capacidade', 'ultimo_update', 'urlImage'
        ]);
        //expect(mockConversor).toHaveBeenCalledWith('USD', 1);
    }));
});
//# sourceMappingURL=locacao.controller.test.js.map