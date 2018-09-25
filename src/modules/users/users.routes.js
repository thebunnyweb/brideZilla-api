import { Router } from 'express';
import Expressvalidate from 'express-validation';
import * as UserController from './users.controller';
import UserValidation from './users.validation';
import { AuthLogin } from '../../services/auth';

const routes = new Router();

routes.post('/adduser', Expressvalidate(UserValidation.userPostValidation), UserController.addUser);
routes.get('/getusers', UserController.getUsers);
routes.post('/login', AuthLogin, UserController.login);

export default routes;
