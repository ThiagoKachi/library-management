"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeAdapter = void 0;
const routeAdapter = (controller, action) => {
    return async (request, reply) => {
        try {
            const { body, statusCode } = await controller[action](request);
            reply.code(statusCode).send(body);
        }
        catch (error) {
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    };
};
exports.routeAdapter = routeAdapter;
