import { UpdateReservationUseCase } from '../useCases/UpdateReservationUseCase';

export function makeUpdateReservationUseCase() {
  return new UpdateReservationUseCase();
}
