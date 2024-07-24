import { Category } from '@prisma/client';
import { CategoryNotExists } from '../errors/CategoryNotExists';
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
      throw new CategoryNotExists();
    }

    return {
      category,
    };
  }
}
