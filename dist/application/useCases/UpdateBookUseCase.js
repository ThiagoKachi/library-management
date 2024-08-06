"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookUseCase = void 0;
const AuthorNotExists_1 = require("../errors/AuthorNotExists");
const BookNotExists_1 = require("../errors/BookNotExists");
const CategoryNotExists_1 = require("../errors/CategoryNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class UpdateBookUseCase {
    async execute(id, data) {
        if (data.authorId) {
            const author = await prismaClient_1.prismaClient.author.findUnique({
                where: {
                    id: data.authorId
                }
            });
            if (!author) {
                throw new AuthorNotExists_1.AuthorNotExists();
            }
        }
        if (data.categoryId) {
            const category = await prismaClient_1.prismaClient.category.findUnique({
                where: {
                    id: data.categoryId
                }
            });
            if (!category) {
                throw new CategoryNotExists_1.CategoryNotExists();
            }
        }
        const book = await prismaClient_1.prismaClient.book.update({
            where: {
                id: Number(id)
            },
            data,
        });
        if (!book) {
            throw new BookNotExists_1.BookNotExists();
        }
        return {
            book,
        };
    }
}
exports.UpdateBookUseCase = UpdateBookUseCase;
