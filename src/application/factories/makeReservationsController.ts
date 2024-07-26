import { CreateReservationUseCase } from '@application/useCases/CreateReservationUseCase';
import { ListReservationsUseCase } from '@application/useCases/ListReservationsUseCase';
import { SendEmailUseCase } from '@application/useCases/SendEmailUseCase';
import { UpdateReservationStatusUseCase } from '@application/useCases/UpdateReservationStatusUseCase';
import { UpdateReservationUseCase } from '@application/useCases/UpdateReservationUseCase';
import { ReservationsController } from '../controllers/ReservationsController';

export function makeReservationsController() {
  const createReservationUseCase = new CreateReservationUseCase();
  const listReservationsUseCase = new ListReservationsUseCase();
  const updateReservationUseCase = new UpdateReservationUseCase();
  const updateReservationStatusUseCase = new UpdateReservationStatusUseCase();
  const sendEmailUseCase = new SendEmailUseCase();

  return new ReservationsController(
    createReservationUseCase,
    listReservationsUseCase,
    updateReservationUseCase,
    updateReservationStatusUseCase,
    sendEmailUseCase
  );
}
