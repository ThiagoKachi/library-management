import { FastifyInstance } from "fastify";

export async function publicRoutes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return { hello: 'world' }
  })
}