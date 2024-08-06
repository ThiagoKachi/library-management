"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationMiddleware = authorizationMiddleware;
async function authorizationMiddleware(request, reply) {
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
    }
    catch {
        return reply
            .code(401)
            .send({ error: 'Invalid credentials' });
    }
}
