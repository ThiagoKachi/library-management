import { CreateBookUseCase } from '@application/useCases/CreateBookUseCase';
import { DeleteBookUseCase } from '@application/useCases/DeleteBookUseCase';
import { GetBookByIdUseCase } from '@application/useCases/GetBookByIdUseCase';
import { ListBooksUseCase } from '@application/useCases/ListBooksUseCase';
import { UpdateBookUseCase } from '@application/useCases/UpdateBookUseCase';
import { handleErrors } from '../errors/handleErrors';
import { IBookController } from '../interfaces/IBookController';
import { IRequest, IResponse } from '../interfaces/IController';
import { createBookSchema, updateBookSchema } from '../validation/bookSchemas';

export class BooksController implements IBookController {
  constructor(
    private readonly createBookUseCase: CreateBookUseCase,
    private readonly listBooksUseCase: ListBooksUseCase,
    private readonly getBookByIdUseCase: GetBookByIdUseCase,
    private readonly deleteBookUseCase: DeleteBookUseCase,
    private readonly updateBookUseCase: UpdateBookUseCase,
  ) {}

  async getAllBooks({ query }: IRequest): Promise<IResponse> {
    try {
      const { title, author, category, isAvailable } = query;

      const books = await this.listBooksUseCase.execute({
        title,
        author,
        category,
        isAvailable,
      });

      return {
        statusCode: 200,
        body: books,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }

  async getBookById({ params: { id } }: IRequest): Promise<IResponse> {
    try {
      const book = await this.getBookByIdUseCase.execute(id);

      return {
        statusCode: 200,
        body: book,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }

  async create({ body }: IRequest): Promise<IResponse> {
    try {
      const data = createBookSchema.parse(body);

      const book = await this.createBookUseCase.execute({
        ...data,
        returnDate: data.isBorrowed ? new Date() : undefined,
      });

      return {
        statusCode: 201,
        body: book,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async update({ body, params: { id } }: IRequest): Promise<IResponse> {
    try {
      const data = updateBookSchema.parse(body);

      const book = await this.updateBookUseCase.execute(id, {
        ...data,
        returnDate: data.isBorrowed ? new Date() : undefined,
      });

      return {
        statusCode: 200,
        body: book,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async deleteBook({ params: { id } }: IRequest): Promise<IResponse> {
    try {
      await this.deleteBookUseCase.execute(id);

      return {
        statusCode: 204,
        body: null,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }
}
