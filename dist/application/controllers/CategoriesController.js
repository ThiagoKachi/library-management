"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const handleErrors_1 = require("../errors/handleErrors");
const categorySchemas_1 = require("../validation/categorySchemas");
class CategoriesController {
    createCategoryUseCase;
    listCategoriesUseCase;
    getCategoryByIdUseCase;
    deleteCategoryUseCase;
    updateCategoryUseCase;
    constructor(createCategoryUseCase, listCategoriesUseCase, getCategoryByIdUseCase, deleteCategoryUseCase, updateCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
        this.listCategoriesUseCase = listCategoriesUseCase;
        this.getCategoryByIdUseCase = getCategoryByIdUseCase;
        this.deleteCategoryUseCase = deleteCategoryUseCase;
        this.updateCategoryUseCase = updateCategoryUseCase;
    }
    async getAllCategories() {
        try {
            const categories = await this.listCategoriesUseCase.execute();
            return {
                statusCode: 200,
                body: categories,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async getCategoryById({ params: { id } }) {
        try {
            const category = await this.getCategoryByIdUseCase.execute(id);
            return {
                statusCode: 200,
                body: category,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async create({ body }) {
        try {
            const data = categorySchemas_1.createCategorySchema.parse(body);
            const category = await this.createCategoryUseCase.execute(data);
            return {
                statusCode: 201,
                body: category,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async update({ body, params: { id } }) {
        try {
            const data = categorySchemas_1.updateCategorySchema.parse(body);
            const category = await this.updateCategoryUseCase.execute(id, {
                ...data,
            });
            return {
                statusCode: 200,
                body: category,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async deleteCategory({ params: { id } }) {
        try {
            await this.deleteCategoryUseCase.execute(id);
            return {
                statusCode: 204,
                body: null,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
}
exports.CategoriesController = CategoriesController;
