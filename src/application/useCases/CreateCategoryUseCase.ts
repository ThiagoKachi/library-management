import { Category } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  name: string;
}

interface IOutput {
  category: Category;
}

export class CreateCategoryUseCase {
  async execute(data: IInput): Promise<IOutput> {
    const category = await prismaClient.category.create({
      data,
    });

    return {
      category,
    };
  }
}
