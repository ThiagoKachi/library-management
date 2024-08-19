import { CreateReservationUseCase } from '@application/useCases/CreateReservationUseCase';
import { ListReservationsUseCase } from '@application/useCases/ListReservationsUseCase';
import { SendEmailUseCase } from '@application/useCases/SendEmailUseCase';
import { UpdateReservationStatusUseCase } from '@application/useCases/UpdateReservationStatusUseCase';
import { UpdateReservationUseCase } from '@application/useCases/UpdateReservationUseCase';
import { IRequest, IResponse } from '../interfaces/IController';
import { IReservationController } from '../interfaces/IReservationController';
import { createReservationSchema, updateReservationSchema } from '../validation/reservationSchemas';

export class ReservationsController implements IReservationController {
  constructor(
    private readonly createReservarionUseCase: CreateReservationUseCase,
    private readonly listReservationsUseCase: ListReservationsUseCase,
    private readonly updateReservationUseCase: UpdateReservationUseCase,
    private readonly updateReservationStatusUseCase: UpdateReservationStatusUseCase,
    private readonly sendEmailUseCase: SendEmailUseCase
  ) {}
  async getAllReservations({ user }: IRequest): Promise<IResponse> {
    const userId = user.sub;

    const reservations = await this.listReservationsUseCase.execute(userId);

    return {
      statusCode: 200,
      body: reservations,
    };
  }

  async create({ body, user }: IRequest): Promise<IResponse> {
    const userId = user.sub;

    const data = createReservationSchema.parse(body);

    const reservation = await this.createReservarionUseCase.execute(userId, {
      ...data,
    });

    return {
      statusCode: 201,
      body: reservation,
    };
  }

  async update({ body, params: { id }, user }: IRequest): Promise<IResponse> {
    const userId = user.sub;

    const data = updateReservationSchema.parse(body);

    const reservation = await this.updateReservationUseCase.execute(userId, {
      reservationId: Number(id),
      returnedIn: data.returnedIn,
    });

    return {
      statusCode: 200,
      body: reservation,
    };
  }

  async updateReservationStatus({ body, params: { id } }: IRequest): Promise<IResponse> {
    const reservation = await this.updateReservationStatusUseCase.execute({
      reservationId: Number(id),
      bookId: body.bookId,
    });

    return {
      statusCode: 200,
      body: reservation,
    };
  }

  async sendEmail({ user }: IRequest): Promise<IResponse> {
    await this.sendEmailUseCase.execute({ userId: user.sub });

    return {
      statusCode: 200,
      body: null,
    };
  }
}
