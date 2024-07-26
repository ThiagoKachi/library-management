import { CreateBookUseCase } from '@application/useCases/CreateBookUseCase';
import { DeleteBookUseCase } from '@application/useCases/DeleteBookUseCase';
import { GetBookByIdUseCase } from '@application/useCases/GetBookByIdUseCase';
import { ListBooksUseCase } from '@application/useCases/ListBooksUseCase';
import { UpdateBookUseCase } from '@application/useCases/UpdateBookUseCase';
import { BooksController } from '../controllers/BooksController';

export function makeBooksController() {
  const createBookUseCase = new CreateBookUseCase();
  const listBooksUseCase = new ListBooksUseCase();
  const getBookByIdUseCase = new GetBookByIdUseCase();
  const deleteBookUseCase = new DeleteBookUseCase();
  const updateBookUseCase = new UpdateBookUseCase();

  return new BooksController(
    createBookUseCase,
    listBooksUseCase,
    getBookByIdUseCase,
    deleteBookUseCase,
    updateBookUseCase,
  );
}
