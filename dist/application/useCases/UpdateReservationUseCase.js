"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationUseCase = void 0;
const ReservationNotExists_1 = require("../errors/ReservationNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class UpdateReservationUseCase {
    async execute(userId, data) {
        const { reservationId, ...updateDate } = data;
        const reservation = await prismaClient_1.prismaClient.loanHistory.findUnique({
            where: {
                id: reservationId,
                userId
            }
        });
        if (!reservation) {
            throw new ReservationNotExists_1.ReservationNotExists();
        }
        await prismaClient_1.prismaClient.loanHistory.update({
            where: {
                id_userId: {
                    id: reservationId,
                    userId
                }
            },
            data: {
                ...updateDate
            }
        });
        return {
            reservation,
        };
    }
}
exports.UpdateReservationUseCase = UpdateReservationUseCase;
