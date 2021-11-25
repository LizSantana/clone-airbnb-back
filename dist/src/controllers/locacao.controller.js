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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAloErro = exports.postAloValidado = exports.deleteLocacao = exports.putLocacao = exports.postLocacao = exports.getFiltragemPorPreco = exports.getFiltragemPorCapacidade = exports.getFiltragemPorLocalidade = exports.getFiltragemPorUF = exports.getLocacao = void 0;
const express_validator_1 = require("express-validator");
const locacaoModel_1 = require("../persistencia/locacaoModel");
const locacaoRepositorio = __importStar(require("../persistencia/locacaoRepositorio"));
function getLocacao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const locacao = yield locacaoModel_1.LocacaoModel.find().lean();
        return res.json(locacao);
    });
}
exports.getLocacao = getLocacao;
function getFiltragemPorUF(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const uf = req.params.uf;
        const resultado = yield locacaoRepositorio.buscarPorUF(uf);
        return res.json(resultado);
    });
}
exports.getFiltragemPorUF = getFiltragemPorUF;
function getFiltragemPorLocalidade(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const localidade = req.params.localidade;
        const resultado = yield locacaoRepositorio.buscarPorLocalidade(localidade);
        return res.json(resultado);
    });
}
exports.getFiltragemPorLocalidade = getFiltragemPorLocalidade;
function getFiltragemPorCapacidade(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const capacidade = parseInt(req.params.capacidade);
        const resultado = yield locacaoRepositorio.buscarPorCapacidade(capacidade);
        return res.json(resultado);
    });
}
exports.getFiltragemPorCapacidade = getFiltragemPorCapacidade;
function getFiltragemPorPreco(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const preco = parseInt(req.params.preco);
        const resultado = yield locacaoRepositorio.buscarPorPreco(preco);
        return res.json(resultado);
    });
}
exports.getFiltragemPorPreco = getFiltragemPorPreco;
function postLocacao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const erros = (0, express_validator_1.validationResult)(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }
        else {
            const locacao = req.body;
            if (locacao) {
                yield locacaoRepositorio.inserirLocacao(locacao);
                return res.redirect('back');
            }
        }
    });
}
exports.postLocacao = postLocacao;
function putLocacao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield locacaoRepositorio.updateLocacao(req.params.id, req.body);
            /*res.status(200).send({
                message: 'Locacao atualizada com sucesso!'
            });*/
            res.redirect(200, 'back');
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Falha ao atualizar a locação' });
        }
    });
}
exports.putLocacao = putLocacao;
function deleteLocacao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield locacaoRepositorio.deletaLocacao(req.params.id, req.body);
            res.status(200).send({
                message: 'Locação deletada com sucesso!'
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Falha ao deletar locacao' });
        }
    });
}
exports.deleteLocacao = deleteLocacao;
function postAloValidado(req, res) {
    const erros = (0, express_validator_1.validationResult)(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() });
    }
    else {
        const { nome } = req.body;
        return res.send(`Alô, ${nome}!`);
    }
}
exports.postAloValidado = postAloValidado;
function getAloErro(req, res) {
    throw new Error('Algo deu errado!');
}
exports.getAloErro = getAloErro;
//# sourceMappingURL=locacao.controller.js.map