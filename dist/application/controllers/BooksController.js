"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const handleErrors_1 = require("../errors/handleErrors");
const bookSchemas_1 = require("../validation/bookSchemas");
class BooksController {
    createBookUseCase;
    listBooksUseCase;
    getBookByIdUseCase;
    deleteBookUseCase;
    updateBookUseCase;
    constructor(createBookUseCase, listBooksUseCase, getBookByIdUseCase, deleteBookUseCase, updateBookUseCase) {
        this.createBookUseCase = createBookUseCase;
        this.listBooksUseCase = listBooksUseCase;
        this.getBookByIdUseCase = getBookByIdUseCase;
        this.deleteBookUseCase = deleteBookUseCase;
        this.updateBookUseCase = updateBookUseCase;
    }
    async getAllBooks({ query }) {
        try {
            const { title, author, category, isAvailable } = query;
            const books = await this.listBooksUseCase.execute({
                title,
                author,
                category,
                isAvailable,
            });
            return {
                statusCode: 200,
                body: books,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async getBookById({ params: { id } }) {
        try {
            const book = await this.getBookByIdUseCase.execute(id);
            return {
                statusCode: 200,
                body: book,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async create({ body }) {
        try {
            const data = bookSchemas_1.createBookSchema.parse(body);
            const book = await this.createBookUseCase.execute({
                ...data,
                returnDate: data.isBorrowed ? new Date() : undefined,
            });
            return {
                statusCode: 201,
                body: book,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async update({ body, params: { id } }) {
        try {
            const data = bookSchemas_1.updateBookSchema.parse(body);
            const book = await this.updateBookUseCase.execute(id, {
                ...data,
                returnDate: data.isBorrowed ? new Date() : undefined,
            });
            return {
                statusCode: 200,
                body: book,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async deleteBook({ params: { id } }) {
        try {
            await this.deleteBookUseCase.execute(id);
            return {
                statusCode: 204,
                body: null,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
}
exports.BooksController = BooksController;
