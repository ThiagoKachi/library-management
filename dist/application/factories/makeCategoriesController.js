"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCategoriesController = makeCategoriesController;
const CreateCategoryUseCase_1 = require("@application/useCases/CreateCategoryUseCase");
const DeleteCategoryUseCase_1 = require("@application/useCases/DeleteCategoryUseCase");
const GetCategoryByIdUseCase_1 = require("@application/useCases/GetCategoryByIdUseCase");
const ListCategoriesUseCase_1 = require("@application/useCases/ListCategoriesUseCase");
const UpdateCategoryUseCase_1 = require("@application/useCases/UpdateCategoryUseCase");
const CategoriesController_1 = require("../controllers/CategoriesController");
function makeCategoriesController() {
    const createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase();
    const listCategoriesUseCase = new ListCategoriesUseCase_1.ListCategoriesUseCase();
    const getCategoryByIdUseCase = new GetCategoryByIdUseCase_1.GetCategoryByIdUseCase();
    const deleteCategoryUseCase = new DeleteCategoryUseCase_1.DeleteCategoryUseCase();
    const updateCategoryUseCase = new UpdateCategoryUseCase_1.UpdateCategoryUseCase();
    return new CategoriesController_1.CategoriesController(createCategoryUseCase, listCategoriesUseCase, getCategoryByIdUseCase, deleteCategoryUseCase, updateCategoryUseCase);
}
