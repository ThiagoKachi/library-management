import { FastifyInstance } from 'fastify';
import { GoogleSignInController } from '../application/controllers/GoogleSignInController';
import { makeAuthorsController } from '../application/factories/makeAuthorsController';
import { makeBooksController } from '../application/factories/makeBooksController';
import { makeCategoriesController } from '../application/factories/makeCategoriesController';
import { makeReservationsController } from '../application/factories/makeReservationsController';
import { authMiddleware } from '../application/middlewares/authMiddleware';
import { authorizationMiddleware } from '../application/middlewares/authorizationMiddleware';
import { routeAdapter } from '../server/adapters/routeAdapter';

export async function publicRoutes(fastify: FastifyInstance) {
  fastify.post('/auth/google', GoogleSignInController.handle);
}

export async function privateRoutes(fastify: FastifyInstance) {
  fastify.addHook('onRequest', authMiddleware);

  // BOOKS
  fastify.get('/books', routeAdapter(makeBooksController(), 'getAllBooks'));
  fastify.get('/books/:id', routeAdapter(makeBooksController(), 'getBookById'));

  // AUTHORS
  fastify.get(
    '/authors',
    routeAdapter(makeAuthorsController(), 'getAllAuthors')
  );
  fastify.get(
    '/authors/:name',
    routeAdapter(makeAuthorsController(), 'getAuthorByName')
  );

  // CATEGORIES
  fastify.get(
    '/categories',
    routeAdapter(makeCategoriesController(), 'getAllCategories')
  );
  fastify.get(
    '/categories/:id',
    routeAdapter(makeCategoriesController(), 'getCategoryById')
  );

  // RESERVATIONS
  fastify.get(
    '/reservations',
    routeAdapter(makeReservationsController(), 'getAllReservations')
  );
  fastify.post(
    '/reservations',
    routeAdapter(makeReservationsController(), 'create')
  );
  fastify.put(
    '/reservations/:id',
    routeAdapter(makeReservationsController(), 'update')
  );
}

export async function privateAdminRoutes(fastify: FastifyInstance) {
  fastify.addHook('onRequest', authMiddleware);
  fastify.addHook('onRequest', authorizationMiddleware);

  // BOOKS
  fastify.post('/books', routeAdapter(makeBooksController(), 'create'));
  fastify.put('/books/:id', routeAdapter(makeBooksController(), 'update'));
  fastify.delete(
    '/books/:id',
    routeAdapter(makeBooksController(), 'deleteBook')
  );

  // AUTHORS
  fastify.post('/authors', routeAdapter(makeAuthorsController(), 'create'));
  fastify.put('/authors/:id', routeAdapter(makeAuthorsController(), 'update'));
  fastify.delete(
    '/authors/:id',
    routeAdapter(makeAuthorsController(), 'deleteAuthor')
  );

  // CATEGORIES
  fastify.post(
    '/categories',
    routeAdapter(makeCategoriesController(), 'create')
  );
  fastify.put(
    '/categories/:id',
    routeAdapter(makeCategoriesController(), 'update')
  );
  fastify.delete(
    '/categories/:id',
    routeAdapter(makeCategoriesController(), 'deleteCategory')
  );

  // RESERVATIONS
  fastify.put(
    '/reservations/:id/status',
    routeAdapter(makeReservationsController(), 'updateReservationStatus')
  );
}
