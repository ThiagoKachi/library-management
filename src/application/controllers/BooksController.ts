import { CreateBookUseCase } from '@application/useCases/CreateBookUseCase';
import { DeleteBookUseCase } from '@application/useCases/DeleteBookUseCase';
import { GetBookByIdUseCase } from '@application/useCases/GetBookByIdUseCase';
import { ListBooksUseCase } from '@application/useCases/ListBooksUseCase';
import { UpdateBookUseCase } from '@application/useCases/UpdateBookUseCase';
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
  }

  async getBookById({ params: { id } }: IRequest): Promise<IResponse> {
    const book = await this.getBookByIdUseCase.execute(id);

    return {
      statusCode: 200,
      body: book,
    };
  }

  async create({ body }: IRequest): Promise<IResponse> {
    const data = createBookSchema.parse(body);

    const book = await this.createBookUseCase.execute({
      ...data,
      returnDate: data.isBorrowed ? new Date() : undefined,
    });

    return {
      statusCode: 201,
      body: book,
    };
  }

  async update({ body, params: { id } }: IRequest): Promise<IResponse> {
    const data = updateBookSchema.parse(body);

    const book = await this.updateBookUseCase.execute(id, {
      ...data,
      returnDate: data.isBorrowed ? new Date() : undefined,
    });

    return {
      statusCode: 200,
      body: book,
    };
  }

  async deleteBook({ params: { id } }: IRequest): Promise<IResponse> {
    await this.deleteBookUseCase.execute(id);

    return {
      statusCode: 204,
      body: null,
    };
  }
}
