import { Author } from '@prisma/client';
import { AuthorNotExists } from '../errors/AuthorNotExists';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  name?: string;
}

interface IOutput {
  author: Author;
}

export class UpdateAuthorUseCase {
  async execute(id: string, data: IInput): Promise<IOutput> {
    const author = await prismaClient.author.update({
      where: {
        id: Number(id)
      },
      data,
    });

    if (!author) {
      throw new AuthorNotExists();
    }

    return {
      author,
    };
  }
}
