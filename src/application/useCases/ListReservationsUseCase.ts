import { LoanHistory } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IOutput {
  reservations: LoanHistory[];
}

export class ListReservationsUseCase {
  async execute(userId: string): Promise<IOutput> {
    const reservations = await prismaClient.loanHistory.findMany({
      where: {
        userId
      },
      include: {
        user: true
      }
    });

    return {
      reservations,
    };
  }
}
