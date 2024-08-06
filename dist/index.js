"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const fastify_1 = __importDefault(require("fastify"));
const env_1 = require("./application/config/env");
const routes_1 = require("./server/routes");
const fastify = (0, fastify_1.default)();
fastify.register(cors_1.default);
fastify.register(jwt_1.default, {
    secret: env_1.env.JWT_SECRET,
    sign: {
        expiresIn: '1d',
    },
});
fastify.register(routes_1.publicRoutes);
fastify.register(routes_1.privateAdminRoutes);
fastify.register(routes_1.privateRoutes);
fastify.listen({ port: 3000 }).then(() => {
    console.log('🔥 Server running on port 3000');
});
