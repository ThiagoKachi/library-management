import AppError from '@application/errors/AppError';
import { Author } from '@prisma/client';
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
      throw new AppError('Author not exists.', 404);
    }

    return {
      author,
    };
  }
}
