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
const zod_1 = require("zod");
const Validator_1 = __importDefault(require("./Validator"));
class CustomTaskValidator {
    static validate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = zod_1.z.object({
                name: zod_1.z.string(),
                status: zod_1.z.string(),
                description: zod_1.z.string(),
                expirationDate: zod_1.z.string(),
            });
            yield Validator_1.default.validate(schema, payload);
        });
    }
}
exports.default = CustomTaskValidator;
