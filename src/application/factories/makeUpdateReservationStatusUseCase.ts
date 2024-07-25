import { UpdateReservationStatusUseCase } from '../useCases/UpdateReservationStatusUseCase';

export function makeUpdateReservationStatusUseCase() {
  return new UpdateReservationStatusUseCase();
}
