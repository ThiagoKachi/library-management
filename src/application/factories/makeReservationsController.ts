import { ReservationsController } from '../controllers/ReservationsController';
import { makeCreateReservationUseCase } from './makeCreateReservationUseCase';
import { makeListReservationsUseCase } from './makeListReservationsUseCase';
import { makeUpdateReservationStatusUseCase } from './makeUpdateReservationStatusUseCase';
import { makeUpdateReservationUseCase } from './makeUpdateReservationUseCase';

export function makeReservationsController() {
  const createReservationUseCase = makeCreateReservationUseCase();
  const listReservationsUseCase = makeListReservationsUseCase();
  const updateReservationUseCase = makeUpdateReservationUseCase();
  const updateReservationStatusUseCase = makeUpdateReservationStatusUseCase();

  return new ReservationsController(
    createReservationUseCase,
    listReservationsUseCase,
    updateReservationUseCase,
    updateReservationStatusUseCase
  );
}
