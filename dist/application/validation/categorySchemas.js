"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const baseSchema = zod_1.default.object({
    name: zod_1.default.string().min(1),
});
exports.createCategorySchema = baseSchema;
exports.updateCategorySchema = baseSchema.partial();
