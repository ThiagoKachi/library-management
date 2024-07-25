import { LoanHistory } from '@prisma/client';
import { ReservationNotExists } from '../errors/ReservationNotExists';
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
      throw new ReservationNotExists();
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
