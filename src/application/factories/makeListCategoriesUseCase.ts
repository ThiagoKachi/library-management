import { ListCategoriesUseCase } from '../useCases/ListCategoriesUseCase';

export function makeListCategoriesUseCase() {
  return new ListCategoriesUseCase();
}
