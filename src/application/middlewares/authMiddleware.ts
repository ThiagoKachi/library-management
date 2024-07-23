import { FastifyReply, FastifyRequest } from 'fastify';

export async function authMiddleware(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { role } = await request.jwtVerify() as { role: string };
    request.role = role;
  } catch {
    return reply
      .code(401)
      .send({ error: 'Invalid credentials' });
  }
}
