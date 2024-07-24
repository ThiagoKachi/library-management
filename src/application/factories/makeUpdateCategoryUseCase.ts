import { UpdateCategoryUseCase } from '../useCases/UpdateCategoryUseCase';

export function makeUpdateCategoryUseCase() {
  return new UpdateCategoryUseCase();
}
