import { Book } from '@prisma/client';
import { BookNotExists } from '../errors/BookNotExists';
import { prismaClient } from '../libs/prismaClient';

interface IOutput {
  book: Book;
}

export class GetBookByIdUseCase {
  async execute(id: string): Promise<IOutput> {
    const book = await prismaClient.book.findUnique({
      where: {
        id: Number(id),
      }
    });

    if (!book) {
      throw new BookNotExists();
    }

    return {
      book
    };
  }
}
