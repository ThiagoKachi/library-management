import { GetBookByIdUseCase } from '../useCases/GetBookByIdUseCase';

export function makeGetBookByIdUseCase() {
  return new GetBookByIdUseCase();
}
