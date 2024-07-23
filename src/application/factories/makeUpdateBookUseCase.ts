import { UpdateBookUseCase } from '../useCases/UpdateBookUseCase';

export function makeUpdateBookUseCase() {
  return new UpdateBookUseCase();
}
