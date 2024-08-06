"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookSchema = exports.createBookSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const baseSchema = zod_1.default.object({
    title: zod_1.default.string().min(1),
    description: zod_1.default.string().min(1),
    authorId: zod_1.default.number().min(1),
    image: zod_1.default.string().min(1),
    categoryId: zod_1.default.number().min(1),
    publishedYear: zod_1.default.number().min(1).max(9999),
    isBorrowed: zod_1.default.boolean().default(false),
    returnDate: zod_1.default.date().optional(),
});
exports.createBookSchema = baseSchema;
exports.updateBookSchema = baseSchema.partial();
