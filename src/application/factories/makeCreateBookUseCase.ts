import { CreateBookUseCase } from '../useCases/CreateBookUseCase';

export function makeCreateBookUseCase() {
  return new CreateBookUseCase();
}
