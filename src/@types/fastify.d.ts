import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    role?: string;
  }
}
