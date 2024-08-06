"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthorsController = makeAuthorsController;
const CreateAuthorUseCase_1 = require("@application/useCases/CreateAuthorUseCase");
const DeleteAuthorUseCase_1 = require("@application/useCases/DeleteAuthorUseCase");
const GetAuthorByNameUseCase_1 = require("@application/useCases/GetAuthorByNameUseCase");
const ListAuthorsUseCase_1 = require("@application/useCases/ListAuthorsUseCase");
const UpdateAuthorUseCase_1 = require("@application/useCases/UpdateAuthorUseCase");
const AuthorsController_1 = require("../controllers/AuthorsController");
function makeAuthorsController() {
    const createAuthorUseCase = new CreateAuthorUseCase_1.CreateAuthorUseCase();
    const listAuthorsUseCase = new ListAuthorsUseCase_1.ListAuthorsUseCase();
    const getAuthorByNameUseCase = new GetAuthorByNameUseCase_1.GetAuthorByNameUseCase();
    const deleteAuthorUseCase = new DeleteAuthorUseCase_1.DeleteAuthorUseCase();
    const updateAuthorUseCase = new UpdateAuthorUseCase_1.UpdateAuthorUseCase();
    return new AuthorsController_1.AuthorsController(createAuthorUseCase, listAuthorsUseCase, getAuthorByNameUseCase, deleteAuthorUseCase, updateAuthorUseCase);
}
