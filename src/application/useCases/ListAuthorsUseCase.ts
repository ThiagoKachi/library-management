import { Author } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IOutput {
  authors: Author[];
}

export class ListAuthorsUseCase {
  async execute(): Promise<IOutput> {
    const authors = await prismaClient.author.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        books: true
      }
    });

    return {
      authors,
    };
  }
}
