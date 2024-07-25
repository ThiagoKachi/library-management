import { CreateCategoryUseCase } from '../../application/useCases/CreateCategoryUseCase';
import { DeleteCategoryUseCase } from '../../application/useCases/DeleteCategoryUseCase';
import { GetCategoryByIdUseCase } from '../../application/useCases/GetCategoryByIdUseCase';
import { ListCategoriesUseCase } from '../../application/useCases/ListCategoriesUseCase';
import { UpdateCategoryUseCase } from '../../application/useCases/UpdateCategoryUseCase';
import { handleErrors } from '../errors/handleErrors';
import { ICategoryController } from '../interfaces/ICategoryController';
import { IRequest, IResponse } from '../interfaces/IController';
import { createCategorySchema, updateCategorySchema } from '../validation/categorySchemas';

export class CategoriesController implements ICategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly listCategoriesUseCase: ListCategoriesUseCase,
    private readonly getCategoryByIdUseCase: GetCategoryByIdUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
  ) {}

  async getAllCategories(): Promise<IResponse> {
    try {
      const categories = await this.listCategoriesUseCase.execute();

      return {
        statusCode: 200,
        body: categories,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }

  async getCategoryById({ params: { id } }: IRequest): Promise<IResponse> {
    try {
      const category = await this.getCategoryByIdUseCase.execute(id);

      return {
        statusCode: 200,
        body: category,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }

  async create({ body }: IRequest): Promise<IResponse> {
    try {
      const data = createCategorySchema.parse(body);

      const category = await this.createCategoryUseCase.execute(data);

      return {
        statusCode: 201,
        body: category,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async update({ body, params: { id } }: IRequest): Promise<IResponse> {
    try {
      const data = updateCategorySchema.parse(body);

      const category = await this.updateCategoryUseCase.execute(id, {
        ...data,
      });

      return {
        statusCode: 200,
        body: category,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async deleteCategory({ params: { id } }: IRequest): Promise<IResponse> {
    try {
      await this.deleteCategoryUseCase.execute(id);

      return {
        statusCode: 204,
        body: null,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }
}
