import { ImagesApis } from '@application/services/ImagesApi';
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

    const imageURL = await ImagesApis.getImageUrl(book.image);

    return {
      book: {
        ...book,
        image: imageURL
      }
    };
  }
}
