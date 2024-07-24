import { CreateAuthorUseCase } from '../useCases/CreateAuthorUseCase';

export function makeCreateAuthorUseCase() {
  return new CreateAuthorUseCase();
}
