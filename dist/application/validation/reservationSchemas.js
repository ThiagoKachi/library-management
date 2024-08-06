"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReservationSchema = exports.createReservationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const baseSchema = zod_1.default.object({
    bookId: zod_1.default.number().min(1),
    returnedIn: zod_1.default.string().min(1),
});
exports.createReservationSchema = baseSchema;
exports.updateReservationSchema = baseSchema.partial();
