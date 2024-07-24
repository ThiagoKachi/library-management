import { Author } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  name: string;
}

interface IOutput {
  author: Author;
}

export class CreateAuthorUseCase {
  async execute(data: IInput): Promise<IOutput> {
    const author = await prismaClient.author.create({
      data,
    });

    return {
      author,
    };
  }
}
