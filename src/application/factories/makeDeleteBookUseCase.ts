import { DeleteBookUseCase } from '../useCases/DeleteBookUseCase';

export function makeDeleteBookUseCase() {
  return new DeleteBookUseCase();
}
