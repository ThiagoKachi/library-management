import { FastifyReply, FastifyRequest } from 'fastify';

export async function authorizationMiddleware(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { role } = request;

    if (!role) {
      reply.code(401).send({
        error: 'Invalid credentials.',
      });

      return;
    }

    if (role !== 'ADMIN') {
      reply.code(401).send({
        error: 'Unauthorized.',
      });

      return;
    }
  } catch {
    return reply
      .code(401)
      .send({ error: 'Invalid credentials' });
  }
}
