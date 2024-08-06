"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsController = void 0;
const handleErrors_1 = require("../errors/handleErrors");
const authorSchemas_1 = require("../validation/authorSchemas");
class AuthorsController {
    createAuthorUseCase;
    listAuthorsUseCase;
    getAuthorByNameUseCase;
    deleteAuthorUseCase;
    updateAuthorUseCase;
    constructor(createAuthorUseCase, listAuthorsUseCase, getAuthorByNameUseCase, deleteAuthorUseCase, updateAuthorUseCase) {
        this.createAuthorUseCase = createAuthorUseCase;
        this.listAuthorsUseCase = listAuthorsUseCase;
        this.getAuthorByNameUseCase = getAuthorByNameUseCase;
        this.deleteAuthorUseCase = deleteAuthorUseCase;
        this.updateAuthorUseCase = updateAuthorUseCase;
    }
    async getAllAuthors() {
        try {
            const authors = await this.listAuthorsUseCase.execute();
            return {
                statusCode: 200,
                body: authors,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async getAuthorByName({ params: { name } }) {
        try {
            const author = await this.getAuthorByNameUseCase.execute(name);
            return {
                statusCode: 200,
                body: author,
            };
        }
        catch (erro) {
            return (0, handleErrors_1.handleErrors)(erro);
        }
    }
    async create({ body }) {
        try {
            const data = authorSchemas_1.createAuthorSchema.parse(body);
            const author = await this.createAuthorUseCase.execute(data);
            return {
                statusCode: 201,
                body: author,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async update({ body, params: { id } }) {
        try {
            const data = authorSchemas_1.updateAuthorSchema.parse(body);
            const author = await this.updateAuthorUseCase.execute(id, {
                ...data,
            });
            return {
                statusCode: 200,
                body: author,
            };
        }
        catch (error) {
            return (0, handleErrors_1.handleErrors)(error);
        }
    }
    async deleteAuthor({ params: { id } }) {
        try {
            await this.deleteAuthorUseCase.execute(id);
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
exports.AuthorsController = AuthorsController;
