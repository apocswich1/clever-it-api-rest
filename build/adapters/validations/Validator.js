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
class Validator {
    static getProperty(path) {
        return path.reduce((prev, next) => {
            let property = prev.toString();
            property = typeof next === 'number' ? property.concat(`[${next}]`) : property.concat(`.${next}`);
            return property;
        });
    }
    static validate(schema, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield schema.safeParseAsync(payload).then(result => {
                if (!result.success) {
                    const errors = result.error.errors.map(value => {
                        return { property: this.getProperty(value.path), detail: value.message };
                    });
                    throw new Error(`${errors[0].property} - ${errors[0].detail}`);
                }
            });
        });
    }
}
exports.default = Validator;
