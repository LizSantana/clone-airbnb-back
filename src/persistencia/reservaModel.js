"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaModel = exports.ReservaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReservaSchema = new mongoose_1.Schema({
    locacao_id: { type: mongoose_1.SchemaTypes.ObjectId, required: true },
    proprietario_id: { type: mongoose_1.SchemaTypes.ObjectId, required: true },
    cliente_id: { type: mongoose_1.SchemaTypes.ObjectId, required: true },
    recibos_id: { type: mongoose_1.SchemaTypes.ObjectId, required: true },
    data_inicio: { type: Date, required: true, default: new Date() },
    data_fim: { type: Date, required: true, default: new Date() },
});
exports.ReservaModel = (0, mongoose_1.model)('ReservaPorId', exports.ReservaSchema, 'reservas-por-id');
//# sourceMappingURL=reservaModel.js.map