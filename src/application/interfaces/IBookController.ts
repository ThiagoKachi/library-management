export interface IRequest {
  body: Record<string, any>;
  params: Record<string, string>;
}

export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IBookController {
  create: (request: IRequest) => Promise<IResponse>;
  getAllBooks: (request: IRequest) => Promise<IResponse>;
  getBookById: (request: IRequest) => Promise<IResponse>;
  deleteBook: (request: IRequest) => Promise<IResponse>;
  update: (request: IRequest) => Promise<IResponse>;
}
