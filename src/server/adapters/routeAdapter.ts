import { FastifyReply, FastifyRequest } from 'fastify';

export const routeAdapter = (
  controller: { [key: string]: any },
  action: string
) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body, statusCode } = await controller[action](request);
      reply.code(statusCode).send(body);
    } catch (error) {
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  };
};
