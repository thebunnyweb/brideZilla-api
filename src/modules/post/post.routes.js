import { Router } from 'express';
import * as PostController from './post.controller';
import { JwtAuth } from '../../services/auth';

const routes = new Router();

routes.post('/addpost', JwtAuth, PostController.addpost);
routes.get('/allpost', PostController.getAllPosts);

export default routes;
