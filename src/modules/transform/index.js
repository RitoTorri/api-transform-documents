import { UsersServices } from './transform.service.js';
import { UsersController } from './transform.controller.js';

const usersService = new UsersServices();
const usersController = new UsersController();

export {
    usersService,
    usersController
}