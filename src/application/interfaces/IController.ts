export interface IRequest {
  body: Record<string, any>;
  params: Record<string, string>;
}

export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null;
}
