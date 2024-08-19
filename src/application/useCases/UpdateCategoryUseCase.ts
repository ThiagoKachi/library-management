import AppError from '@application/errors/AppError';
import { Category } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  name?: string;
}

interface IOutput {
  category: Category;
}

export class UpdateCategoryUseCase {
  async execute(id: string, data: IInput): Promise<IOutput> {
    const category = await prismaClient.category.update({
      where: {
        id: Number(id)
      },
      data,
    });

    if (!category) {
      throw new AppError('Category not exists.', 404);
    }

    return {
      category,
    };
  }
}
