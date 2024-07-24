import { DeleteCategoryUseCase } from '../useCases/DeleteCategoryUseCase';

export function makeDeleteCategoryUseCase() {
  return new DeleteCategoryUseCase();
}
