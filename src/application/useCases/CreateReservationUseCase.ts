import { LoanHistory } from '@prisma/client';
import { BookNotAvailable } from '../errors/BookNotAvailable';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  bookId: number,
  returnedIn: string;
}

interface IOutput {
  reservation: LoanHistory;
}

export class CreateReservationUseCase {
  async execute(userId: string, data: IInput): Promise<IOutput> {
    const bookAvailable = await prismaClient.book.findUnique({
      where: {
        id: data.bookId,
        isBorrowed: false
      }
    });

    if (!bookAvailable) {
      throw new BookNotAvailable();
    }

    await prismaClient.book.update({
      where: {
        id: data.bookId
      },
      data: {
        isBorrowed: true
      }
    });

    const reservation = await prismaClient.loanHistory.create({
      data: {
        ...data,
        userId,
      }
    });

    return {
      reservation,
    };
  }
}
