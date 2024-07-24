import { GetCategoryByIdUseCase } from '../useCases/GetCategoryByIdUseCase';

export function makeGetCategoryByIdUseCase() {
  return new GetCategoryByIdUseCase();
}
