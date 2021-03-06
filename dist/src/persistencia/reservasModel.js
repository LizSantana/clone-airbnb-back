"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasModel = exports.ReservasSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReservasSchema = new mongoose_1.Schema({
    locacao_nome: { type: String, required: true, minlength: 5, maxlength: 50 },
    cep: { type: String, required: true, minlength: 8, maxlength: 8 },
    logradouro: { type: String, required: true, minlength: 5, maxlength: 50 },
    complemento: { type: String, required: true, minlength: 5, maxlength: 100 },
    bairro: { type: String, required: true, minlength: 5, maxlength: 50 },
    localidade: { type: String, required: true, minlength: 5, maxlength: 25 },
    uf: { type: String, required: true, minlength: 2, maxlength: 2 },
    descricao_longa: { type: String, required: true, minlength: 5, maxlength: 250 },
    descricao_curta: { type: String, required: true, minlength: 5, maxlength: 50 },
    preco: { type: Number, required: true, min: 0 },
    proprietario: {
        nome: { type: String, required: true },
        cpf: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    capacidade: { type: Number, required: true, min: 1 },
    ultimo_update: { type: Date, required: true, default: new Date() },
    check_in: { type: Date, required: true, default: new Date() },
    check_out: { type: Date, required: true, default: new Date() },
});
exports.ReservasModel = (0, mongoose_1.model)('Reservas', exports.ReservasSchema, 'reservas');
//# sourceMappingURL=reservasModel.js.map