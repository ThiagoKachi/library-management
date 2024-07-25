import { ListReservationsUseCase } from '../useCases/ListReservationsUseCase';

export function makeListReservationsUseCase() {
  return new ListReservationsUseCase();
}
