"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
const prismaClient_1 = require("../libs/prismaClient");
class ListCategoriesUseCase {
    async execute() {
        const categories = await prismaClient_1.prismaClient.category.findMany({
            orderBy: {
                createdAt: 'asc',
            },
            include: {
                books: true
            }
        });
        return {
            categories,
        };
    }
}
exports.ListCategoriesUseCase = ListCategoriesUseCase;
