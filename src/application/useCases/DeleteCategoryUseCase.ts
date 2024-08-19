import AppError from '@application/errors/AppError';
import { prismaClient } from '../libs/prismaClient';

export class DeleteCategoryUseCase {
  async execute(id: string): Promise<void> {
    const book = await prismaClient.category.delete({
      where: {
        id: Number(id),
      }
    });

    if (!book) {
      throw new AppError('Category not exists.', 404);
    }
  }
}
