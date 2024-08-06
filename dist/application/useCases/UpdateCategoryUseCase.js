"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryUseCase = void 0;
const CategoryNotExists_1 = require("../errors/CategoryNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class UpdateCategoryUseCase {
    async execute(id, data) {
        const category = await prismaClient_1.prismaClient.category.update({
            where: {
                id: Number(id)
            },
            data,
        });
        if (!category) {
            throw new CategoryNotExists_1.CategoryNotExists();
        }
        return {
            category,
        };
    }
}
exports.UpdateCategoryUseCase = UpdateCategoryUseCase;
