"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAuthorsUseCase = void 0;
const prismaClient_1 = require("../libs/prismaClient");
class ListAuthorsUseCase {
    async execute() {
        const authors = await prismaClient_1.prismaClient.author.findMany({
            orderBy: {
                createdAt: 'asc',
            },
            include: {
                books: true
            }
        });
        return {
            authors,
        };
    }
}
exports.ListAuthorsUseCase = ListAuthorsUseCase;
