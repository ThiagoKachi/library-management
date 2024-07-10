import Fastify from 'fastify';
import { publicRoutes } from './routes';

const fastify = Fastify();

fastify.register(publicRoutes);

fastify.listen({ port: 3000 }).then(() => {
  console.log('🔥 Server running on port 3000');
});