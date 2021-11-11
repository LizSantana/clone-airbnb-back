"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProprietarioModel = exports.ProprietarioSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProprietarioSchema = new mongoose_1.Schema({
    nome: { type: String, required: true, minlength: 5, maxlength: 50 },
    cpf: { type: String, required: true, minlength: 11, maxlength: 11 },
    cep: { type: String, required: true, minlength: 8, maxlength: 8 },
    logradouro: { type: String, required: true, minlength: 5, maxlength: 50 },
    complemento: { type: String, required: true, minlength: 5, maxlength: 100 },
    bairro: { type: String, required: true, minlength: 5, maxlength: 50 },
    localidade: { type: String, required: true, minlength: 5, maxlength: 25 },
    uf: { type: String, required: true, minlength: 2, maxlength: 2 },
});
exports.ProprietarioModel = (0, mongoose_1.model)('Proprietario', exports.ProprietarioSchema, 'proprietarios');
//# sourceMappingURL=proprietarioModel.js.map