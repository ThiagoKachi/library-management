import { Category } from '@prisma/client';
import { CategoryNotExists } from '../errors/CategoryNotExists';
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
      throw new CategoryNotExists();
    }

    return {
      category
    };
  }
}
