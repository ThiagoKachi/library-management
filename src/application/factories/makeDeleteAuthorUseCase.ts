import { DeleteAuthorUseCase } from '../useCases/DeleteAuthorUseCase';

export function makeDeleteAuthorUseCase() {
  return new DeleteAuthorUseCase();
}
