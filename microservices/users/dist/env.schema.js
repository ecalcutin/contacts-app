"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_SCHEMA = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ENV_SCHEMA = joi_1.default.object({
    NODE_ENV: joi_1.default.string().valid('development', 'production').required(),
});
//# sourceMappingURL=env.schema.js.map