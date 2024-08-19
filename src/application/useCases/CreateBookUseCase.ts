import AppError from '@application/errors/AppError';
import { Book } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  title: string;
  description: string;
  authorId: number;
  image: string;
  categoryId: number;
  publishedYear: number;
  isBorrowed: boolean;
  returnDate: Date | undefined;
}

interface IOutput {
  book: Book;
}

export class CreateBookUseCase {
  async execute(data: IInput): Promise<IOutput> {
    const author = await prismaClient.author.findUnique({
      where: {
        id: data.authorId
      }
    });

    if (!author) {
      throw new AppError('Author not exists.', 404);
    }

    const category = await prismaClient.category.findUnique({
      where: {
        id: data.categoryId
      }
    });

    if (!category) {
      throw new AppError('Category not exists.', 404);
    }

    const book = await prismaClient.book.create({
      data,
    });

    return {
      book,
    };
  }
}
