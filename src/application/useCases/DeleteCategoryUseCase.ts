import { CategoryNotExists } from '../errors/CategoryNotExists';
import { prismaClient } from '../libs/prismaClient';

export class DeleteCategoryUseCase {
  async execute(id: string): Promise<void> {
    const book = await prismaClient.category.delete({
      where: {
        id: Number(id),
      }
    });

    if (!book) {
      throw new CategoryNotExists();
    }
  }
}
