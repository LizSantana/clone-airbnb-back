"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeModel = exports.DateTimeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DateTimeSchema = new mongoose_1.Schema({
    date_point: { type: Date, required: true, default: new Date() },
    check_in: { type: Date, required: true, default: new Date() },
    check_out: { type: Date, required: true, default: new Date() },
});
exports.DateTimeModel = (0, mongoose_1.model)('DateTime', exports.DateTimeSchema, 'date_time');
//# sourceMappingURL=dateTimeModel.js.map