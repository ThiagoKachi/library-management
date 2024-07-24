import { GetAuthorByNameUseCase } from '../useCases/GetAuthorByNameUseCase';

export function makeGetAuthorByNameUseCase() {
  return new GetAuthorByNameUseCase();
}
