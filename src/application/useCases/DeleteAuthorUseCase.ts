import AppError from '@application/errors/AppError';
import { prismaClient } from '../libs/prismaClient';

export class DeleteAuthorUseCase {
  async execute(id: string): Promise<void> {
    const book = await prismaClient.author.delete({
      where: {
        id: Number(id),
      }
    });

    if (!book) {
      throw new AppError('Author not exists.', 404);
    }
  }
}
