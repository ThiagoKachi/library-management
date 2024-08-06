"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookUseCase = void 0;
const AuthorNotExists_1 = require("../errors/AuthorNotExists");
const CategoryNotExists_1 = require("../errors/CategoryNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class CreateBookUseCase {
    async execute(data) {
        const author = await prismaClient_1.prismaClient.author.findUnique({
            where: {
                id: data.authorId
            }
        });
        if (!author) {
            throw new AuthorNotExists_1.AuthorNotExists();
        }
        const category = await prismaClient_1.prismaClient.category.findUnique({
            where: {
                id: data.categoryId
            }
        });
        if (!category) {
            throw new CategoryNotExists_1.CategoryNotExists();
        }
        const book = await prismaClient_1.prismaClient.book.create({
            data,
        });
        return {
            book,
        };
    }
}
exports.CreateBookUseCase = CreateBookUseCase;
