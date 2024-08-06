"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthorUseCase = void 0;
const AuthorNotExists_1 = require("../errors/AuthorNotExists");
const prismaClient_1 = require("../libs/prismaClient");
class UpdateAuthorUseCase {
    async execute(id, data) {
        const author = await prismaClient_1.prismaClient.author.update({
            where: {
                id: Number(id)
            },
            data,
        });
        if (!author) {
            throw new AuthorNotExists_1.AuthorNotExists();
        }
        return {
            author,
        };
    }
}
exports.UpdateAuthorUseCase = UpdateAuthorUseCase;
