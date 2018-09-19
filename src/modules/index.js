import UserRoutes from './users/users.routes';

export default app => {
  app.use('/api', UserRoutes);
};
