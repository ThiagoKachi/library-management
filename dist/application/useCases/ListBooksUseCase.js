"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBooksUseCase = void 0;
const ImagesApi_1 = require("@application/services/ImagesApi");
const prismaClient_1 = require("../libs/prismaClient");
class ListBooksUseCase {
    async execute({ title, author, category, isAvailable }) {
        const isBookAvailable = isAvailable === 'true' ? false : true;
        const titleCondition = { title };
        const authorCondition = author ? { authorId: Number(author) } : {};
        const categoryCondition = category ? { categoryId: Number(category) } : {};
        const isBorrowedCondition = isAvailable !== undefined ? { isBorrowed: isBookAvailable } : {};
        const books = await prismaClient_1.prismaClient.book.findMany({
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
        const updatedBooksURLs = await Promise.all(books.map(async (book) => {
            const imageURL = await ImagesApi_1.ImagesApis.getImageUrl(book.image);
            return {
                ...book,
                image: imageURL
            };
        }));
        return {
            books: updatedBooksURLs,
        };
    }
}
exports.ListBooksUseCase = ListBooksUseCase;
