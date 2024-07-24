import { AuthorsController } from '../controllers/AuthorsController';
import { makeCreateAuthorUseCase } from './makeCreateAuthorUseCase';
import { makeDeleteAuthorUseCase } from './makeDeleteAuthorUseCase';
import { makeGetAuthorByNameUseCase } from './makeGetAuthorByNameUseCase';
import { makeListAuthorsUseCase } from './makeListAuthorsUseCase';
import { makeUpdateAuthorUseCase } from './makeUpdateAuthorUseCase';

export function makeAuthorsController() {
  const createAuthorUseCase = makeCreateAuthorUseCase();
  const listAuthorsUseCase = makeListAuthorsUseCase();
  const getAuthorByNameUseCase = makeGetAuthorByNameUseCase();
  const deleteAuthorUseCase = makeDeleteAuthorUseCase();
  const updateAuthorUseCase = makeUpdateAuthorUseCase();

  return new AuthorsController(
    createAuthorUseCase,
    listAuthorsUseCase,
    getAuthorByNameUseCase,
    deleteAuthorUseCase,
    updateAuthorUseCase
  );
}
