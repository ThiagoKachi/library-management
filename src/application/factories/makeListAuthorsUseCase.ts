import { ListAuthorsUseCase } from '../useCases/ListAuthorsUseCase';

export function makeListAuthorsUseCase() {
  return new ListAuthorsUseCase();
}
