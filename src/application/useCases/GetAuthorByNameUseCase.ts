import { Author } from '@prisma/client';
import { AuthorNotExists } from '../errors/AuthorNotExists';
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
      throw new AuthorNotExists();
    }

    return {
      author
    };
  }
}
