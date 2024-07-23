import { FastifyInstance, FastifyRequest } from 'fastify';
import { GoogleSignInController } from '../application/controllers/GoogleSignInController';
import { makeBooksController } from '../application/factories/makeBooksController';
import { IRequest } from '../application/interfaces/IBookController';
import { authMiddleware } from '../application/middlewares/authMiddleware';
import { authorizationMiddleware } from '../application/middlewares/authorizationMiddleware';

export async function publicRoutes(fastify: FastifyInstance) {
  fastify.post('/auth/google', GoogleSignInController.handle);
}

export async function privateRoutes(fastify: FastifyInstance) {
  fastify.addHook('onRequest', authMiddleware);

  fastify.get('/books',
    async () => await makeBooksController().getAllBooks(),
  );
  fastify.get('/books/:id',
    async (request: FastifyRequest) =>
      await makeBooksController().getBookById(request as IRequest),
  );
}

export async function privateAdminRoutes(fastify: FastifyInstance) {
  fastify.addHook('onRequest', authMiddleware);
  fastify.addHook('onRequest', authorizationMiddleware);

  fastify.post('/books',
    async (request: FastifyRequest) => await makeBooksController().create(request as IRequest),
  );

  fastify.put('/books/:id',
    async (request: FastifyRequest) => await makeBooksController().update(request as IRequest),
  );

  fastify.delete('/books/:id',
    async (request: FastifyRequest) => {
      await makeBooksController().deleteBook(request as IRequest);
    }
  );
}
