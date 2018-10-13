import { Router } from 'express';
import ExpressValidation from 'express-validation';
import * as EnquiryController from './enquiry.controller';
import ModelValidation from './enquiry.validation';

const routes = new Router();

routes.post('/addenquiry', ExpressValidation(ModelValidation), EnquiryController.addEnquiry);
routes.get('/enquiry', EnquiryController.getEnquiry);

export default routes;
