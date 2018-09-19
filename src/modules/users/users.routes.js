import { Router } from 'express';
import Expressvalidate from 'express-validation';
import * as UserController from './users.controller';
import UserValidation from './users.validation';

const routes = new Router();

routes.post('/adduser', Expressvalidate(UserValidation.userPostValidation), UserController.addUser);
routes.get('/getusers', UserController.getUsers);

export default routes;
