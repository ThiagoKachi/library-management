import { ZodError } from 'zod';
import { BookNotExists } from '../errors/BookNotExists';
import { InvalidCredentials } from '../errors/InvalidCredentials';
import { IResponse } from '../interfaces/IBookController';

export const handleErrors = (error: unknown): IResponse => {
  if (error instanceof ZodError) {
    return {
      statusCode: 400,
      body: error.issues,
    };
  }

  if (error instanceof InvalidCredentials) {
    return {
      statusCode: 401,
      body: {
        error: 'Invalid credentials.',
      },
    };
  }

  if (error instanceof BookNotExists) {
    return {
      statusCode: 404,
      body: {
        error: 'Book not exists.',
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
