"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReservationsUseCase = void 0;
const prismaClient_1 = require("../libs/prismaClient");
class ListReservationsUseCase {
    async execute(userId) {
        const reservations = await prismaClient_1.prismaClient.loanHistory.findMany({
            where: {
                userId
            },
            include: {
                user: true
            }
        });
        return {
            reservations,
        };
    }
}
exports.ListReservationsUseCase = ListReservationsUseCase;
