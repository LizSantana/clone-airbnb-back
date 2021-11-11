"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReciboModel = exports.ReciboSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReciboSchema = new mongoose_1.Schema({
    cliente_id: { type: mongoose_1.SchemaTypes.ObjectId, required: true },
    data_pagamento: { type: Date, required: true, default: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    dias_reserva: { type: Number, required: true, min: 1 },
    montante: { type: Number, required: true, min: 1 }
});
exports.ReciboModel = (0, mongoose_1.model)('Recibo', exports.ReciboSchema, 'recibos');
//# sourceMappingURL=reciboModel.js.map