"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
const prismaClient_1 = require("../libs/prismaClient");
class CreateCategoryUseCase {
    async execute(data) {
        const category = await prismaClient_1.prismaClient.category.create({
            data,
        });
        return {
            category,
        };
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;
