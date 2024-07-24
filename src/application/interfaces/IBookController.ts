import { IRequest, IResponse } from './IController';

export interface IBookController {
  create: (request: IRequest) => Promise<IResponse>;
  getAllBooks: (request: IRequest) => Promise<IResponse>;
  getBookById: (request: IRequest) => Promise<IResponse>;
  deleteBook: (request: IRequest) => Promise<IResponse>;
  update: (request: IRequest) => Promise<IResponse>;
}
