"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBooksController = makeBooksController;
const CreateBookUseCase_1 = require("@application/useCases/CreateBookUseCase");
const DeleteBookUseCase_1 = require("@application/useCases/DeleteBookUseCase");
const GetBookByIdUseCase_1 = require("@application/useCases/GetBookByIdUseCase");
const ListBooksUseCase_1 = require("@application/useCases/ListBooksUseCase");
const UpdateBookUseCase_1 = require("@application/useCases/UpdateBookUseCase");
const BooksController_1 = require("../controllers/BooksController");
function makeBooksController() {
    const createBookUseCase = new CreateBookUseCase_1.CreateBookUseCase();
    const listBooksUseCase = new ListBooksUseCase_1.ListBooksUseCase();
    const getBookByIdUseCase = new GetBookByIdUseCase_1.GetBookByIdUseCase();
    const deleteBookUseCase = new DeleteBookUseCase_1.DeleteBookUseCase();
    const updateBookUseCase = new UpdateBookUseCase_1.UpdateBookUseCase();
    return new BooksController_1.BooksController(createBookUseCase, listBooksUseCase, getBookByIdUseCase, deleteBookUseCase, updateBookUseCase);
}
