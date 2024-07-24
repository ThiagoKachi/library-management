import { Category } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IOutput {
  categories: Category[];
}

export class ListCategoriesUseCase {
  async execute(): Promise<IOutput> {
    const categories = await prismaClient.category.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        books: true
      }
    });

    return {
      categories,
    };
  }
}
