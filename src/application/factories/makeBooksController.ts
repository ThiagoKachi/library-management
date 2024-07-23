import { BooksController } from '../controllers/BooksController';
import { makeCreateBookUseCase } from './makeCreateBookUseCase';
import { makeDeleteBookUseCase } from './makeDeleteBookUseCase';
import { makeGetBookByIdUseCase } from './makeGetBookByIdUseCase';
import { makeListBooksUseCase } from './makeListBooksUseCase';
import { makeUpdateBookUseCase } from './makeUpdateBookUseCase';

export function makeBooksController() {
  const createBookUseCase = makeCreateBookUseCase();
  const listBooksUseCase = makeListBooksUseCase();
  const getBookByIdUseCase = makeGetBookByIdUseCase();
  const deleteBookUseCase = makeDeleteBookUseCase();
  const updateBookUseCase = makeUpdateBookUseCase();

  return new BooksController(
    createBookUseCase,
    listBooksUseCase,
    getBookByIdUseCase,
    deleteBookUseCase,
    updateBookUseCase
  );
}
