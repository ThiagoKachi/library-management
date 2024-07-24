import { CategoriesController } from '../controllers/CategoriesController';
import { makeCreateCategoryUseCase } from './makeCreateCategoryUseCase';
import { makeDeleteCategoryUseCase } from './makeDeleteCategoryUseCase';
import { makeGetCategoryByIdUseCase } from './makeGetCategoryByIdUseCase';
import { makeListCategoriesUseCase } from './makeListCategoriesUseCase';
import { makeUpdateCategoryUseCase } from './makeUpdateCategoryUseCase';

export function makeCategoriesController() {
  const createCategoryUseCase = makeCreateCategoryUseCase();
  const listCategoriesUseCase = makeListCategoriesUseCase();
  const getCategoryByIdUseCase = makeGetCategoryByIdUseCase();
  const deleteCategoryUseCase = makeDeleteCategoryUseCase();
  const updateCategoryUseCase = makeUpdateCategoryUseCase();

  return new CategoriesController(
    createCategoryUseCase,
    listCategoriesUseCase,
    getCategoryByIdUseCase,
    deleteCategoryUseCase,
    updateCategoryUseCase
  );
}
