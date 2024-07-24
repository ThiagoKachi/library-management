import { IRequest, IResponse } from './IController';

export interface IAuthorController {
  create: (request: IRequest) => Promise<IResponse>;
  getAllAuthors: (request: IRequest) => Promise<IResponse>;
  getAuthorByName: (request: IRequest) => Promise<IResponse>;
  deleteAuthor: (request: IRequest) => Promise<IResponse>;
  update: (request: IRequest) => Promise<IResponse>;
}

