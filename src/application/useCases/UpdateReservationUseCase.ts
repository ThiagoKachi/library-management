import AppError from '@application/errors/AppError';
import { LoanHistory } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  returnedIn?: string;
  reservationId: number;
}

interface IOutput {
  reservation: LoanHistory;
}

export class UpdateReservationUseCase {
  async execute(userId: string, data: IInput): Promise<IOutput> {
    const { reservationId, ...updateDate } = data;

    const reservation = await prismaClient.loanHistory.findUnique({
      where: {
        id: reservationId,
        userId
      }
    });

    if (!reservation) {
      throw new AppError('Reservation not exists.', 404);
    }

    await prismaClient.loanHistory.update({
      where: {
        id_userId: {
          id: reservationId,
          userId
        }
      },
      data: {
        ...updateDate
      }
    });

    return {
      reservation,
    };
  }
}
