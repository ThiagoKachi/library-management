import { Book } from '@prisma/client';
import { AuthorNotExists } from '../errors/AuthorNotExists';
import { BookNotExists } from '../errors/BookNotExists';
import { CategoryNotExists } from '../errors/CategoryNotExists';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  title?: string;
  description?: string;
  authorId?: number;
  image?: string;
  categoryId?: number;
  publishedYear?: number;
  isBorrowed?: boolean;
  returnDate?: Date | undefined;
}

interface IOutput {
  book: Book;
}

export class UpdateBookUseCase {
  async execute(id: string, data: IInput): Promise<IOutput> {
    const author = await prismaClient.author.findUnique({
      where: {
        id: data.authorId
      }
    });

    if (!author) {
      throw new AuthorNotExists();
    }

    const category = await prismaClient.category.findUnique({
      where: {
        id: data.categoryId
      }
    });

    if (!category) {
      throw new CategoryNotExists();
    }

    const book = await prismaClient.book.update({
      where: {
        id: Number(id)
      },
      data,
    });

    if (!book) {
      throw new BookNotExists();
    }

    return {
      book,
    };
  }
}
