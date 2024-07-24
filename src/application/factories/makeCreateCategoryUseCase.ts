import { CreateCategoryUseCase } from '../useCases/CreateCategoryUseCase';

export function makeCreateCategoryUseCase() {
  return new CreateCategoryUseCase();
}
