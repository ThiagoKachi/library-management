import { CreateAuthorUseCase } from '../../application/useCases/CreateAuthorUseCase';
import { DeleteAuthorUseCase } from '../../application/useCases/DeleteAuthorUseCase';
import { GetAuthorByNameUseCase } from '../../application/useCases/GetAuthorByNameUseCase';
import { ListAuthorsUseCase } from '../../application/useCases/ListAuthorsUseCase';
import { UpdateAuthorUseCase } from '../../application/useCases/UpdateAuthorUseCase';
import { handleErrors } from '../errors/handleErrors';
import { IAuthorController } from '../interfaces/IAuthorController';
import { IRequest, IResponse } from '../interfaces/IController';
import { createAuthorSchema, updateAuthorSchema } from '../validation/authorSchemas';

export class AuthorsController implements IAuthorController {
  constructor(
    private readonly createAuthorUseCase: CreateAuthorUseCase,
    private readonly listAuthorsUseCase: ListAuthorsUseCase,
    private readonly getAuthorByNameUseCase: GetAuthorByNameUseCase,
    private readonly deleteAuthorUseCase: DeleteAuthorUseCase,
    private readonly updateAuthorUseCase: UpdateAuthorUseCase,
  ) {}

  async getAllAuthors(): Promise<IResponse> {
    try {
      const authors = await this.listAuthorsUseCase.execute();

      return {
        statusCode: 200,
        body: authors,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }

  async getAuthorByName({ params: { name } }: IRequest): Promise<IResponse> {
    try {
      const author = await this.getAuthorByNameUseCase.execute(name);

      return {
        statusCode: 200,
        body: author,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }

  async create({ body }: IRequest): Promise<IResponse> {
    try {
      const data = createAuthorSchema.parse(body);

      const author = await this.createAuthorUseCase.execute(data);

      return {
        statusCode: 201,
        body: author,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async update({ body, params: { id } }: IRequest): Promise<IResponse> {
    try {
      const data = updateAuthorSchema.parse(body);

      const author = await this.updateAuthorUseCase.execute(id, {
        ...data,
      });

      return {
        statusCode: 200,
        body: author,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async deleteAuthor({ params: { id } }: IRequest): Promise<IResponse> {
    try {
      await this.deleteAuthorUseCase.execute(id);

      return {
        statusCode: 204,
        body: null,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }
}
