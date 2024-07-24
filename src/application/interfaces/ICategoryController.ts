import { IRequest, IResponse } from './IController';

export interface ICategoryController {
  create: (request: IRequest) => Promise<IResponse>;
  getAllCategories: (request: IRequest) => Promise<IResponse>;
  getCategoryById: (request: IRequest) => Promise<IResponse>;
  deleteCategory: (request: IRequest) => Promise<IResponse>;
  update: (request: IRequest) => Promise<IResponse>;
}
