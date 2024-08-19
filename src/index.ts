import 'dotenv/config';

import AppError from '@application/errors/AppError';
import FastifyCORS from '@fastify/cors';
import FastifyJWT from '@fastify/jwt';
import { Prisma } from '@prisma/client';
import Fastify, { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { env } from './application/config/env';
import { privateAdminRoutes, privateRoutes, publicRoutes } from './server/routes';

const fastify = Fastify();

fastify.register(FastifyCORS);
fastify.register(FastifyJWT, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '1d',
  },
});

fastify.setErrorHandler((err: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
  if (err instanceof AppError) {
    reply.status(err.statusCode).send({
      status: 'error',
      message: err.message
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return reply.status(404).send({
      status: 'error',
      message: `[${err.code}] - ${err.meta?.modelName} - ${err.meta?.cause}`,
    });
  }

  reply.status(500).send({
    status: 'error',
    message: 'Internal server error'
  });

  return reply;
});

fastify.register(publicRoutes);
fastify.register(privateAdminRoutes);
fastify.register(privateRoutes);

fastify.listen({ port: 3000 }).then(() => {
  console.log('🔥 Server running on port 3000');
});
