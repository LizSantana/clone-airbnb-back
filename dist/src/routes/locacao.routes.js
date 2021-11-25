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
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.router = void 0;
const express_1 = require("express");
const LocacaoController = __importStar(require("../controllers/locacao.controller"));
exports.router = (0, express_1.Router)();
exports.path = '/locacao';
exports.router.get(exports.path, LocacaoController.getLocacao);
exports.router.get(`${exports.path}/uf/:uf`, LocacaoController.getFiltragemPorUF);
exports.router.get(`${exports.path}/localidade/:localidade`, LocacaoController.getFiltragemPorLocalidade);
exports.router.get(`${exports.path}/capacidade/:capacidade`, LocacaoController.getFiltragemPorCapacidade);
exports.router.get(`${exports.path}/preco/:preco`, LocacaoController.getFiltragemPorPreco);
exports.router.post(`${exports.path}/criarlocacao`, LocacaoController.postLocacao);
exports.router.post(`${exports.path}/:id`, LocacaoController.putLocacao);
exports.router.post(`${exports.path}/:id/deletarlocacao`, LocacaoController.deleteLocacao);
//# sourceMappingURL=locacao.routes.js.map