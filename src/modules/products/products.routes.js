import { Router } from 'express';
import Expressvalidate from 'express-validation';
import productsValidation from './product.validation';
import * as productController from './product.controller';

const Routes = new Router();

Routes.post('/addproduct', Expressvalidate(productsValidation), productController.addProduct);
Routes.get('/products', productController.getProduct);
Routes.patch(
  '/updateproduct/:id',
  Expressvalidate(productsValidation),
  productController.updateProduct
);
Routes.delete('/removeproduct/:id', productController.removeRecord);
Routes.get('/productsbyvendor/:id', productController.getProductsByVendor);

export default Routes;