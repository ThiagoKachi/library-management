import { Book } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  title: string;
  description: string;
  author: string;
  image: string;
  category: string;
  publishedYear: number;
  isBorrowed: boolean;
  returnDate: Date | undefined;
}

interface IOutput {
  book: Book;
}

export class CreateBookUseCase {
  async execute(data: IInput): Promise<IOutput> {
    const book = await prismaClient.book.create({
      data,
    });

    return {
      book,
    };
  }
}
