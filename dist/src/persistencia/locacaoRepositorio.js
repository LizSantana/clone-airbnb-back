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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletaLocacao = exports.updateLocacao = exports.inserirLocacao = exports.buscarPorPreco = exports.buscarPorLocalidadeEPreco = exports.buscarPorCapacidade = exports.buscarPorLocalidade = exports.buscarPorUF = void 0;
const locacaoModel_1 = require("./locacaoModel");
function buscarPorUF(uf) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = locacaoModel_1.LocacaoModel.find({ "uf": { "$regex": uf, "$options": "i" } });
        return consulta.exec();
    });
}
exports.buscarPorUF = buscarPorUF;
function buscarPorLocalidade(localidade) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = locacaoModel_1.LocacaoModel.find({ "localidade": { "$regex": localidade, "$options": "i" } });
        return consulta.exec();
    });
}
exports.buscarPorLocalidade = buscarPorLocalidade;
function buscarPorCapacidade(capacidade) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = locacaoModel_1.LocacaoModel.find({ capacidade: { $gte: capacidade } });
        return consulta.exec();
    });
}
exports.buscarPorCapacidade = buscarPorCapacidade;
function buscarPorLocalidadeEPreco(localidade, preco) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = locacaoModel_1.LocacaoModel.where("localidade").equals(localidade).find({ "preco": { $lte: preco } });
        return consulta.exec();
    });
}
exports.buscarPorLocalidadeEPreco = buscarPorLocalidadeEPreco;
function buscarPorPreco(preco) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = locacaoModel_1.LocacaoModel.find({ preco: { $lte: preco } });
        return consulta.exec();
    });
}
exports.buscarPorPreco = buscarPorPreco;
function inserirLocacao(locacao) {
    return __awaiter(this, void 0, void 0, function* () {
        return locacaoModel_1.LocacaoModel.create(locacao);
    });
}
exports.inserirLocacao = inserirLocacao;
function updateLocacao(id, locacao) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield locacaoModel_1.LocacaoModel.findByIdAndUpdate(id, locacao);
    });
}
exports.updateLocacao = updateLocacao;
function deletaLocacao(id, cpf) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = yield locacaoModel_1.LocacaoModel.findById(id).where('cpf').equals(cpf);
        if (consulta) {
            yield locacaoModel_1.LocacaoModel.findByIdAndDelete(id);
        }
    });
}
exports.deletaLocacao = deletaLocacao;
//# sourceMappingURL=locacaoRepositorio.js.map