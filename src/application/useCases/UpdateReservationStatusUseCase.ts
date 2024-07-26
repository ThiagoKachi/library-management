import { BookNotExists } from '../errors/BookNotExists';
import { ReservationNotExists } from '../errors/ReservationNotExists';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  bookId: string;
  reservationId: number;
}

interface IOutput {
  message: string;
}

export class UpdateReservationStatusUseCase {
  async execute(data: IInput): Promise<IOutput> {
    const reservation = await prismaClient.loanHistory.findUnique({
      where: {
        id: data.reservationId,
      }
    });

    if (!reservation) {
      throw new ReservationNotExists();
    }

    await prismaClient.loanHistory.update({
      where: {
        id: data.reservationId
      },
      data: {
        returnedAtDate: new Date().toISOString()
      }
    });

    const book = await prismaClient.book.findUnique({
      where: {
        id: Number(data.bookId),
      }
    });

    if (!book) {
      throw new BookNotExists();
    }

    await prismaClient.book.update({
      where: {
        id: Number(data.bookId),
      },
      data: {
        isBorrowed: false
      }
    });

    return {
      message: 'Reservation status updated!'
    };
  }
}
