import { CreateCategoryUseCase } from '@application/useCases/CreateCategoryUseCase';
import { DeleteCategoryUseCase } from '@application/useCases/DeleteCategoryUseCase';
import { GetCategoryByIdUseCase } from '@application/useCases/GetCategoryByIdUseCase';
import { ListCategoriesUseCase } from '@application/useCases/ListCategoriesUseCase';
import { UpdateCategoryUseCase } from '@application/useCases/UpdateCategoryUseCase';
import { CategoriesController } from '../controllers/CategoriesController';

export function makeCategoriesController() {
  const createCategoryUseCase = new CreateCategoryUseCase();
  const listCategoriesUseCase = new ListCategoriesUseCase();
  const getCategoryByIdUseCase = new GetCategoryByIdUseCase();
  const deleteCategoryUseCase = new DeleteCategoryUseCase();
  const updateCategoryUseCase = new UpdateCategoryUseCase();

  return new CategoriesController(
    createCategoryUseCase,
    listCategoriesUseCase,
    getCategoryByIdUseCase,
    deleteCategoryUseCase,
    updateCategoryUseCase
  );
}
