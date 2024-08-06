"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const zod_1 = require("zod");
const BookNotExists_1 = require("../errors/BookNotExists");
const InvalidCredentials_1 = require("../errors/InvalidCredentials");
const AuthorNotExists_1 = require("./AuthorNotExists");
const BookNotAvailable_1 = require("./BookNotAvailable");
const CategoryNotExists_1 = require("./CategoryNotExists");
const ReservationNotExists_1 = require("./ReservationNotExists");
const UserNotExists_1 = require("./UserNotExists");
const handleErrors = (error) => {
    if (error instanceof zod_1.ZodError) {
        return {
            statusCode: 400,
            body: error.issues,
        };
    }
    if (error instanceof InvalidCredentials_1.InvalidCredentials) {
        return {
            statusCode: 401,
            body: {
                error: 'Invalid credentials.',
            },
        };
    }
    if (error instanceof BookNotExists_1.BookNotExists) {
        return {
            statusCode: 404,
            body: {
                error: 'Book not exists.',
            },
        };
    }
    if (error instanceof AuthorNotExists_1.AuthorNotExists) {
        return {
            statusCode: 404,
            body: {
                error: 'Author not exists.',
            },
        };
    }
    if (error instanceof ReservationNotExists_1.ReservationNotExists) {
        return {
            statusCode: 404,
            body: {
                error: 'Reservation not exists.',
            },
        };
    }
    if (error instanceof BookNotAvailable_1.BookNotAvailable) {
        return {
            statusCode: 404,
            body: {
                error: 'Book not available.',
            },
        };
    }
    if (error instanceof CategoryNotExists_1.CategoryNotExists) {
        return {
            statusCode: 404,
            body: {
                error: 'Category not exists.',
            },
        };
    }
    if (error instanceof UserNotExists_1.UserNotExists) {
        return {
            statusCode: 404,
            body: {
                error: 'User not exists.',
            },
        };
    }
    return {
        statusCode: 500,
        body: {
            error: 'Internal server error.',
        },
    };
};
exports.handleErrors = handleErrors;
