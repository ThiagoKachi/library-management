"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBookByIdUseCase = void 0;
const ImagesApi_1 = require("@application/services/ImagesApi");
const BookNotExists_1 = require("../errors/BookNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class GetBookByIdUseCase {
    async execute(id) {
        const book = await prismaClient_1.prismaClient.book.findUnique({
            where: {
                id: Number(id),
            }
        });
        if (!book) {
            throw new BookNotExists_1.BookNotExists();
        }
        const imageURL = await ImagesApi_1.ImagesApis.getImageUrl(book.image);
        return {
            book: {
                ...book,
                image: imageURL
            }
        };
    }
}
exports.GetBookByIdUseCase = GetBookByIdUseCase;
