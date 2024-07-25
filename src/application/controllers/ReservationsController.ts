import { CreateReservationUseCase } from '../../application/useCases/CreateReservationUseCase';
import { ListReservationsUseCase } from '../../application/useCases/ListReservationsUseCase';
import { UpdateReservationStatusUseCase } from '../../application/useCases/UpdateReservationStatusUseCase';
import { UpdateReservationUseCase } from '../../application/useCases/UpdateReservationUseCase';
import { handleErrors } from '../errors/handleErrors';
import { IRequest, IResponse } from '../interfaces/IController';
import { IReservationController } from '../interfaces/IReservationController';
import { createReservationSchema, updateReservationSchema } from '../validation/reservationSchemas';

export class ReservationsController implements IReservationController {
  constructor(
    private readonly createReservarionUseCase: CreateReservationUseCase,
    private readonly listReservationsUseCase: ListReservationsUseCase,
    private readonly updateReservationUseCase: UpdateReservationUseCase,
    private readonly updateReservationStatusUseCase: UpdateReservationStatusUseCase,
  ) {}
  async getAllReservations({ user }: IRequest): Promise<IResponse> {
    const userId = user.sub;

    try {
      const reservations = await this.listReservationsUseCase.execute(userId);

      return {
        statusCode: 200,
        body: reservations,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }

  async create({ body, user }: IRequest): Promise<IResponse> {
    const userId = user.sub;

    try {
      const data = createReservationSchema.parse(body);

      const reservation = await this.createReservarionUseCase.execute(userId, {
        ...data,
      });

      return {
        statusCode: 201,
        body: reservation,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async update({ body, params: { id }, user }: IRequest): Promise<IResponse> {
    const userId = user.sub;

    try {
      const data = updateReservationSchema.parse(body);

      const reservation = await this.updateReservationUseCase.execute(userId, {
        reservationId: Number(id),
        returnedIn: data.returnedIn,
      });

      return {
        statusCode: 200,
        body: reservation,
      };
    } catch (error) {
      return handleErrors(error);
    }
  }

  async updateReservationStatus({ body, params: { id } }: IRequest): Promise<IResponse> {
    try {
      const reservation = await this.updateReservationStatusUseCase.execute({
        reservationId: Number(id),
        bookId: body.bookId,
      });

      return {
        statusCode: 200,
        body: reservation,
      };
    } catch (erro) {
      return handleErrors(erro);
    }
  }
}
