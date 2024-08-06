"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookUseCase = void 0;
const BookNotExists_1 = require("../errors/BookNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class DeleteBookUseCase {
    async execute(id) {
        const book = await prismaClient_1.prismaClient.book.delete({
            where: {
                id: Number(id),
            }
        });
        if (!book) {
            throw new BookNotExists_1.BookNotExists();
        }
    }
}
exports.DeleteBookUseCase = DeleteBookUseCase;
