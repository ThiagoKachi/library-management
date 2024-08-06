"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthorUseCase = void 0;
const prismaClient_1 = require("../libs/prismaClient");
class CreateAuthorUseCase {
    async execute(data) {
        const author = await prismaClient_1.prismaClient.author.create({
            data,
        });
        return {
            author,
        };
    }
}
exports.CreateAuthorUseCase = CreateAuthorUseCase;
