"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAuthorUseCase = void 0;
const AuthorNotExists_1 = require("../errors/AuthorNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class DeleteAuthorUseCase {
    async execute(id) {
        const book = await prismaClient_1.prismaClient.author.delete({
            where: {
                id: Number(id),
            }
        });
        if (!book) {
            throw new AuthorNotExists_1.AuthorNotExists();
        }
    }
}
exports.DeleteAuthorUseCase = DeleteAuthorUseCase;
