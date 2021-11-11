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
exports.criarReserva = exports.status = exports.buscarPorPreco = exports.buscarPorCapacidade = exports.buscarPorLocalidade = exports.buscarPorUF = void 0;
const reservasModel_1 = require("./reservasModel");
function buscarPorUF(uf) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = reservasModel_1.ReservasModel.where('uf').equals(uf);
        return consulta.exec();
    });
}
exports.buscarPorUF = buscarPorUF;
function buscarPorLocalidade(localidade) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = reservasModel_1.ReservasModel.where('localidade').equals(localidade);
        return consulta.exec();
    });
}
exports.buscarPorLocalidade = buscarPorLocalidade;
function buscarPorCapacidade(capacidade) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = reservasModel_1.ReservasModel.where('capacidade').equals(capacidade);
        return consulta.exec();
    });
}
exports.buscarPorCapacidade = buscarPorCapacidade;
function buscarPorPreco(preco) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = reservasModel_1.ReservasModel.find({ preco: { $lte: preco } });
        return consulta.exec();
    });
}
exports.buscarPorPreco = buscarPorPreco;
function status(objectId, data_inicio, data_fim) {
    return __awaiter(this, void 0, void 0, function* () {
        let consulta = yield reservasModel_1.ReservasModel.findById(objectId).exec();
        if (consulta != null || consulta != undefined) {
            return ((data_inicio < consulta.check_in || data_inicio > consulta.check_out) && data_fim < consulta.check_in);
        }
        return false;
    });
}
exports.status = status;
function criarReserva(objectId, data_inicio, data_fim) {
    return __awaiter(this, void 0, void 0, function* () {
        let consultaReserva = yield reservasModel_1.ReservasModel.findById(objectId).exec();
        if (consultaReserva != null || consultaReserva != undefined) {
            if (yield status(objectId, data_inicio, data_fim)) {
                consultaReserva.check_in = data_inicio;
                consultaReserva.check_out = data_fim;
                const reservaCriada = yield consultaReserva.save();
                console.log(reservaCriada);
                return true;
            }
        }
        else {
            throw new Error('Reserva indisponível');
        }
        return false;
    });
}
exports.criarReserva = criarReserva;
//# sourceMappingURL=reservasRepositorio.js.map