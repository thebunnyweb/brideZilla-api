import { Router } from 'express';
import ExpressValidation from 'express-validation';
import vendorValidation from './vendors.validation';
import * as VendorController from './vendors.controller';

const routes = new Router();

routes.post(
  '/addvendor',
  ExpressValidation(vendorValidation.VendorValidation),
  VendorController.addVendor
);
routes.get('/vendors', VendorController.getVendors);
routes.patch(
  '/updatevendor/:id',
  ExpressValidation(vendorValidation.VendorValidation),
  VendorController.updateVendor
);
routes.delete('/removevendor/:id', VendorController.deleteVendor);

export default routes;
