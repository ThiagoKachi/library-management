"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuthorByNameUseCase = void 0;
const AuthorNotExists_1 = require("../errors/AuthorNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class GetAuthorByNameUseCase {
    async execute(name) {
        const author = await prismaClient_1.prismaClient.author.findFirst({
            where: {
                name: name,
            },
            include: {
                books: true
            }
        });
        if (!author) {
            throw new AuthorNotExists_1.AuthorNotExists();
        }
        return {
            author
        };
    }
}
exports.GetAuthorByNameUseCase = GetAuthorByNameUseCase;
