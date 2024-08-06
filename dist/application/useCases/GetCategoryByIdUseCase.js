"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryByIdUseCase = void 0;
const CategoryNotExists_1 = require("../errors/CategoryNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class GetCategoryByIdUseCase {
    async execute(id) {
        const category = await prismaClient_1.prismaClient.category.findFirst({
            where: {
                id: Number(id),
            },
            include: {
                books: true
            }
        });
        if (!category) {
            throw new CategoryNotExists_1.CategoryNotExists();
        }
        return {
            category
        };
    }
}
exports.GetCategoryByIdUseCase = GetCategoryByIdUseCase;
