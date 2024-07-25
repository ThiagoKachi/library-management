import { IRequest, IResponse } from './IController';

export interface IReservationController {
  create: (request: IRequest) => Promise<IResponse>;
  getAllReservations: (request: IRequest) => Promise<IResponse>;
  update: (request: IRequest) => Promise<IResponse>;
  updateReservationStatus: (request: IRequest) => Promise<IResponse>;
}
