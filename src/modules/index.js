import UserRoutes from './users/users.routes';
import PostRoutes from './post/post.routes';
import ProductRoutes from './products/products.routes';

export default app => {
  app.use('/api', UserRoutes);
  app.use('/api', PostRoutes);
  app.use('/api', ProductRoutes);
};
