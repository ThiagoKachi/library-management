import AppError from '@application/errors/AppError';
import { prismaClient } from '../libs/prismaClient';

export class DeleteBookUseCase {
  async execute(id: string): Promise<void> {
    const book = await prismaClient.book.delete({
      where: {
        id: Number(id),
      }
    });

    if (!book) {
      throw new AppError('Book not exists.', 404);
    }
  }
}
