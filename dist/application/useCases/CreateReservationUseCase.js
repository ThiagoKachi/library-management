"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReservationUseCase = void 0;
const BookNotAvailable_1 = require("../errors/BookNotAvailable");
const prismaClient_1 = require("../libs/prismaClient");
class CreateReservationUseCase {
    async execute(userId, data) {
        const bookAvailable = await prismaClient_1.prismaClient.book.findUnique({
            where: {
                id: data.bookId,
                isBorrowed: false
            }
        });
        if (!bookAvailable) {
            throw new BookNotAvailable_1.BookNotAvailable();
        }
        await prismaClient_1.prismaClient.book.update({
            where: {
                id: data.bookId
            },
            data: {
                isBorrowed: true
            }
        });
        const reservation = await prismaClient_1.prismaClient.loanHistory.create({
            data: {
                ...data,
                userId,
            }
        });
        return {
            reservation,
        };
    }
}
exports.CreateReservationUseCase = CreateReservationUseCase;
