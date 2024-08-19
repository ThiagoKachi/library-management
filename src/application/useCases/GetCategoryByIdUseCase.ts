import AppError from '@application/errors/AppError';
import { Category } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IOutput {
  category: Category;
}

export class GetCategoryByIdUseCase {
  async execute(id: string): Promise<IOutput> {
    const category = await prismaClient.category.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        books: true
      }
    });

    if (!category) {
      throw new AppError('Category not exists.', 404);
    }

    return {
      category
    };
  }
}
