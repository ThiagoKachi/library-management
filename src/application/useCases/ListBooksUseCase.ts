import { Book } from '@prisma/client';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  title: string;
  author: string;
  category: string;
  isAvailable: string;
}

interface IOutput {
  books: Book[];
}

export class ListBooksUseCase {
  async execute({
    title,
    author,
    category,
    isAvailable
  }: IInput): Promise<IOutput> {
    const isBookAvailable = isAvailable === 'true' ? false : true;

    const titleCondition = { title };
    const authorCondition = author ? { authorId: Number(author) } : {};
    const categoryCondition = category ? { categoryId: Number(category) } : {};
    const isBorrowedCondition = isAvailable !== undefined ? { isBorrowed: isBookAvailable } : {};

    const books = await prismaClient.book.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      where: {
        ...titleCondition,
        ...authorCondition,
        ...categoryCondition,
        ...isBorrowedCondition
      },
      include: {
        author: true,
        category: true
      }
    });

    return {
      books,
    };
  }
}
