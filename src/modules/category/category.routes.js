import { Router } from 'express';
import ExpressValidation from 'express-validation';
import * as CategoryController from './category.controller';
import CategoryValidation from './category.validation';

const router = new Router();

router.post(
  '/addcategory',
  ExpressValidation(CategoryValidation.CategoryValidation),
  CategoryController.addCategory
);

router.get('/category', CategoryController.getCategory);
router.patch(
  '/updatecategory/:id',
  ExpressValidation(CategoryValidation.CategoryValidation),
  CategoryController.updateCategory
);
router.delete('/removecategory/:id', CategoryController.deleteCategory);

export default router;
