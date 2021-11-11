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
const mongoose_1 = require("mongoose");
const app_1 = __importDefault(require("./app"));
const uri = process.env.MONGO_URL || 'mongodb://localhost:27017/';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)(uri);
            console.log('Conectado ao MongoDb Atlas');
            app_1.default.listen(app_1.default.get('port'), () => {
                console.log('Express na porta:', app_1.default.get('port'));
                console.log('Express no modo:', app_1.default.get('env'));
            });
        }
        catch (error) {
            console.log('Falha de acesso ao BD:');
            console.error(error);
        } /*finally {
            await disconnect();
            console.log('Desconectado do MongoDb Atlas');
        }*/
    });
}
main();
//# sourceMappingURL=index.js.map