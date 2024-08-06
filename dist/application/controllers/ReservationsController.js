"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsController = void 0;
const handleErrors_1 = require("../errors/handleErrors");
const reservationSchemas_1 = require("../validation/reservationSchemas");
class ReservationsController {
    createReservarionUseCase;
    listReservationsUseCase;
    updateReservationUseCase;
    updateReservationStatusUseCase;
    sendEmailUseCase;
    constructor(createReservarionUseCase, listReservationsUseCase, updateReservationUseCase, updateReservationStatusUseCase, sendEmailUseCase) {
        this.createReservarionUseCase = createReservarionUseCase;
        this.listReservationsUseCase = listReservationsUseCase;
        this.updateReservationUseCase = updateReservationUseCase;
        this.updateReservationStatusUseCase = updateReservationStatusUseCase;
        this.sendEmailUseCase = sendEmailUseCase;
    }
    async getAllReservations({ user }) {
        const userId = user.sub;
        try {
            const reservations = await this.listReservationsUseCase.execute(userId);
            return {
                statusCode: 200,
                body: reservations,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async create({ body, user }) {
        const userId = user.sub;
        try {
            const data = reservationSchemas_1.createReservationSchema.parse(body);
            const reservation = await this.createReservarionUseCase.execute(userId, {
                ...data,
            });
            return {
                statusCode: 201,
                body: reservation,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async update({ body, params: { id }, user }) {
        const userId = user.sub;
        try {
            const data = reservationSchemas_1.updateReservationSchema.parse(body);
            const reservation = await this.updateReservationUseCase.execute(userId, {
                reservationId: Number(id),
                returnedIn: data.returnedIn,
            });
            return {
                statusCode: 200,
                body: reservation,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async updateReservationStatus({ body, params: { id } }) {
        try {
            const reservation = await this.updateReservationStatusUseCase.execute({
                reservationId: Number(id),
                bookId: body.bookId,
            });
            return {
                statusCode: 200,
                body: reservation,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async sendEmail({ user }) {
        try {
            await this.sendEmailUseCase.execute({ userId: user.sub });
            return {
                statusCode: 200,
                body: null,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
}
exports.ReservationsController = ReservationsController;
