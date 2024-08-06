"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryUseCase = void 0;
const CategoryNotExists_1 = require("../errors/CategoryNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class DeleteCategoryUseCase {
    async execute(id) {
        const book = await prismaClient_1.prismaClient.category.delete({
            where: {
                id: Number(id),
            }
        });
        if (!book) {
            throw new CategoryNotExists_1.CategoryNotExists();
        }
    }
}
exports.DeleteCategoryUseCase = DeleteCategoryUseCase;
