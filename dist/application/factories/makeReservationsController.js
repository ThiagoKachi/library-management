"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeReservationsController = makeReservationsController;
const CreateReservationUseCase_1 = require("@application/useCases/CreateReservationUseCase");
const ListReservationsUseCase_1 = require("@application/useCases/ListReservationsUseCase");
const SendEmailUseCase_1 = require("@application/useCases/SendEmailUseCase");
const UpdateReservationStatusUseCase_1 = require("@application/useCases/UpdateReservationStatusUseCase");
const UpdateReservationUseCase_1 = require("@application/useCases/UpdateReservationUseCase");
const ReservationsController_1 = require("../controllers/ReservationsController");
function makeReservationsController() {
    const createReservationUseCase = new CreateReservationUseCase_1.CreateReservationUseCase();
    const listReservationsUseCase = new ListReservationsUseCase_1.ListReservationsUseCase();
    const updateReservationUseCase = new UpdateReservationUseCase_1.UpdateReservationUseCase();
    const updateReservationStatusUseCase = new UpdateReservationStatusUseCase_1.UpdateReservationStatusUseCase();
    const sendEmailUseCase = new SendEmailUseCase_1.SendEmailUseCase();
    return new ReservationsController_1.ReservationsController(createReservationUseCase, listReservationsUseCase, updateReservationUseCase, updateReservationStatusUseCase, sendEmailUseCase);
}
