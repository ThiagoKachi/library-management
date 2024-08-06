"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationStatusUseCase = void 0;
const BookNotExists_1 = require("../errors/BookNotExists");
const ReservationNotExists_1 = require("../errors/ReservationNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class UpdateReservationStatusUseCase {
    async execute(data) {
        const reservation = await prismaClient_1.prismaClient.loanHistory.findUnique({
            where: {
                id: data.reservationId,
            }
        });
        if (!reservation) {
            throw new ReservationNotExists_1.ReservationNotExists();
        }
        await prismaClient_1.prismaClient.loanHistory.update({
            where: {
                id: data.reservationId
            },
            data: {
                returnedAtDate: new Date().toISOString()
            }
        });
        const book = await prismaClient_1.prismaClient.book.findUnique({
            where: {
                id: Number(data.bookId),
            }
        });
        if (!book) {
            throw new BookNotExists_1.BookNotExists();
        }
        await prismaClient_1.prismaClient.book.update({
            where: {
                id: Number(data.bookId),
            },
            data: {
                isBorrowed: false
            }
        });
        return {
            message: 'Reservation status updated!'
        };
    }
}
exports.UpdateReservationStatusUseCase = UpdateReservationStatusUseCase;
