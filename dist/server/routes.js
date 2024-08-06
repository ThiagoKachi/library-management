"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoutes = publicRoutes;
exports.privateRoutes = privateRoutes;
exports.privateAdminRoutes = privateAdminRoutes;
const GoogleSignInController_1 = require("@application/controllers/GoogleSignInController");
const makeAuthorsController_1 = require("@application/factories/makeAuthorsController");
const makeBooksController_1 = require("@application/factories/makeBooksController");
const makeCategoriesController_1 = require("@application/factories/makeCategoriesController");
const makeReservationsController_1 = require("@application/factories/makeReservationsController");
const authMiddleware_1 = require("@application/middlewares/authMiddleware");
const authorizationMiddleware_1 = require("@application/middlewares/authorizationMiddleware");
const routeAdapter_1 = require("../server/adapters/routeAdapter");
async function publicRoutes(fastify) {
    fastify.post('/auth/google', GoogleSignInController_1.GoogleSignInController.handle);
}
async function privateRoutes(fastify) {
    fastify.addHook('onRequest', authMiddleware_1.authMiddleware);
    // BOOKS
    fastify.get('/books', (0, routeAdapter_1.routeAdapter)((0, makeBooksController_1.makeBooksController)(), 'getAllBooks'));
    fastify.get('/books/:id', (0, routeAdapter_1.routeAdapter)((0, makeBooksController_1.makeBooksController)(), 'getBookById'));
    // AUTHORS
    fastify.get('/authors', (0, routeAdapter_1.routeAdapter)((0, makeAuthorsController_1.makeAuthorsController)(), 'getAllAuthors'));
    fastify.get('/authors/:name', (0, routeAdapter_1.routeAdapter)((0, makeAuthorsController_1.makeAuthorsController)(), 'getAuthorByName'));
    // CATEGORIES
    fastify.get('/categories', (0, routeAdapter_1.routeAdapter)((0, makeCategoriesController_1.makeCategoriesController)(), 'getAllCategories'));
    fastify.get('/categories/:id', (0, routeAdapter_1.routeAdapter)((0, makeCategoriesController_1.makeCategoriesController)(), 'getCategoryById'));
    // RESERVATIONS
    fastify.get('/reservations', (0, routeAdapter_1.routeAdapter)((0, makeReservationsController_1.makeReservationsController)(), 'getAllReservations'));
    fastify.post('/reservations', (0, routeAdapter_1.routeAdapter)((0, makeReservationsController_1.makeReservationsController)(), 'create'));
    fastify.put('/reservations/:id', (0, routeAdapter_1.routeAdapter)((0, makeReservationsController_1.makeReservationsController)(), 'update'));
}
async function privateAdminRoutes(fastify) {
    fastify.addHook('onRequest', authMiddleware_1.authMiddleware);
    fastify.addHook('onRequest', authorizationMiddleware_1.authorizationMiddleware);
    // BOOKS
    fastify.post('/books', (0, routeAdapter_1.routeAdapter)((0, makeBooksController_1.makeBooksController)(), 'create'));
    fastify.put('/books/:id', (0, routeAdapter_1.routeAdapter)((0, makeBooksController_1.makeBooksController)(), 'update'));
    fastify.delete('/books/:id', (0, routeAdapter_1.routeAdapter)((0, makeBooksController_1.makeBooksController)(), 'deleteBook'));
    // AUTHORS
    fastify.post('/authors', (0, routeAdapter_1.routeAdapter)((0, makeAuthorsController_1.makeAuthorsController)(), 'create'));
    fastify.put('/authors/:id', (0, routeAdapter_1.routeAdapter)((0, makeAuthorsController_1.makeAuthorsController)(), 'update'));
    fastify.delete('/authors/:id', (0, routeAdapter_1.routeAdapter)((0, makeAuthorsController_1.makeAuthorsController)(), 'deleteAuthor'));
    // CATEGORIES
    fastify.post('/categories', (0, routeAdapter_1.routeAdapter)((0, makeCategoriesController_1.makeCategoriesController)(), 'create'));
    fastify.put('/categories/:id', (0, routeAdapter_1.routeAdapter)((0, makeCategoriesController_1.makeCategoriesController)(), 'update'));
    fastify.delete('/categories/:id', (0, routeAdapter_1.routeAdapter)((0, makeCategoriesController_1.makeCategoriesController)(), 'deleteCategory'));
    // RESERVATIONS
    fastify.put('/reservations/:id/status', (0, routeAdapter_1.routeAdapter)((0, makeReservationsController_1.makeReservationsController)(), 'updateReservationStatus'));
    fastify.get('/reservations/email', (0, routeAdapter_1.routeAdapter)((0, makeReservationsController_1.makeReservationsController)(), 'sendEmail'));
}
