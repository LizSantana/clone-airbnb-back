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
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
class InMemoryDbConnection {
    static getInstance() {
        if (!InMemoryDbConnection.mongoConnection) {
            InMemoryDbConnection.mongoConnection = new InMemoryDbConnection();
        }
        return InMemoryDbConnection.mongoConnection;
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
                const uri = this.mongoServer.getUri();
                yield mongoose_1.default.connect(uri);
            }
            catch (error) {
                console.log('InMemoryDbConnection.open: ', error);
                throw error;
            }
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const collections = mongoose_1.default.connection.collections;
                for (const key in collections) {
                    const collection = collections[key];
                    yield collection.deleteMany({});
                }
            }
            catch (error) {
                console.log('InMemoryDbConnection.clear: ', error);
                throw error;
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connection.dropDatabase();
                yield mongoose_1.default.disconnect();
                if (this.mongoServer) {
                    yield this.mongoServer.stop();
                }
            }
            catch (error) {
                console.log('InMemoryDbConnection.close: ', error);
                throw error;
            }
        });
    }
}
exports.default = InMemoryDbConnection.getInstance();
//# sourceMappingURL=dbhandler.js.map