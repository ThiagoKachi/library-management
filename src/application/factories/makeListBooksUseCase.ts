import { ListBooksUseCase } from '../useCases/ListBooksUseCase';

export function makeListBooksUseCase() {
  return new ListBooksUseCase();
}
