import AppError from '@application/errors/AppError';
import { Author } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IOutput {
  author: Author;
}

export class GetAuthorByNameUseCase {
  async execute(name: string): Promise<IOutput> {
    const author = await prismaClient.author.findFirst({
      where: {
        name: name,
      },
      include: {
        books: true
      }
    });

    if (!author) {
      throw new AppError('Author not exists.', 404);
    }

    return {
      author
    };
  }
}
