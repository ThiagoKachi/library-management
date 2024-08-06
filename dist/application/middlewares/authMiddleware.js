"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
async function authMiddleware(request, reply) {
    try {
        const { role } = await request.jwtVerify();
        request.role = role;
    }
    catch {
        return reply
            .code(401)
            .send({ error: 'Invalid credentials' });
    }
}
