import { ZodError } from 'zod';
import { BookNotExists } from '../errors/BookNotExists';
import { InvalidCredentials } from '../errors/InvalidCredentials';
import { IResponse } from '../interfaces/IController';
import { AuthorNotExists } from './AuthorNotExists';
import { CategoryNotExists } from './CategoryNotExists';

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

  if (error instanceof AuthorNotExists) {
    return {
      statusCode: 404,
      body: {
        error: 'Author not exists.',
      },
    };
  }

  if (error instanceof CategoryNotExists) {
    return {
      statusCode: 404,
      body: {
        error: 'Category not exists.',
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
