import { CreateReservationUseCase } from '../useCases/CreateReservationUseCase';

export function makeCreateReservationUseCase() {
  return new CreateReservationUseCase();
}
