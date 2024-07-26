import { CreateAuthorUseCase } from '@application/useCases/CreateAuthorUseCase';
import { DeleteAuthorUseCase } from '@application/useCases/DeleteAuthorUseCase';
import { GetAuthorByNameUseCase } from '@application/useCases/GetAuthorByNameUseCase';
import { ListAuthorsUseCase } from '@application/useCases/ListAuthorsUseCase';
import { UpdateAuthorUseCase } from '@application/useCases/UpdateAuthorUseCase';
import { AuthorsController } from '../controllers/AuthorsController';

export function makeAuthorsController() {
  const createAuthorUseCase = new CreateAuthorUseCase();
  const listAuthorsUseCase = new ListAuthorsUseCase();
  const getAuthorByNameUseCase = new GetAuthorByNameUseCase();
  const deleteAuthorUseCase = new DeleteAuthorUseCase();
  const updateAuthorUseCase = new UpdateAuthorUseCase();

  return new AuthorsController(
    createAuthorUseCase,
    listAuthorsUseCase,
    getAuthorByNameUseCase,
    deleteAuthorUseCase,
    updateAuthorUseCase
  );
}
