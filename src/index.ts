import 'dotenv/config';

import FastifyCORS from '@fastify/cors';
import FastifyJWT from '@fastify/jwt';
import Fastify from 'fastify';

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

fastify.register(publicRoutes);
fastify.register(privateAdminRoutes);
fastify.register(privateRoutes);

fastify.listen({ port: 3000 }).then(() => {
  console.log('🔥 Server running on port 3000');
});
