import UserRoutes from './users/users.routes';
import PostRoutes from './post/post.routes';
import ProductRoutes from './products/products.routes';
import VendorRoutes from './vendors/vendors.routes';
import CategoryRoues from './category/category.routes';

export default app => {
  app.use('/api', UserRoutes);
  app.use('/api', PostRoutes);
  app.use('/api', ProductRoutes);
  app.use('/api', VendorRoutes);
  app.use('/api', CategoryRoues);
};
