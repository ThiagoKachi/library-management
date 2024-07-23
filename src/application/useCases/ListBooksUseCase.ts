import { Book } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IOutput {
  books: Book[];
}

export class ListBooksUseCase {
  async execute(): Promise<IOutput> {
    const books = await prismaClient.book.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return {
      books,
    };
  }
}
