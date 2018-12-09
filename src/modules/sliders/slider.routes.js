import { Router } from 'express';
import expressValidation from 'express-validation';
import * as SliderController from './slider.controller';
import SliderValidation from './slider.validation';

const routes = new Router();

routes.get('/getallsliders', SliderController.getAllSliders);
routes.get('/getsliderbyid/:id', SliderController.getSliderById);
routes.post('/addslider', expressValidation(SliderValidation), SliderController.addSlider);
routes.patch(
  '/updateslider/:id',
  expressValidation(SliderValidation),
  SliderController.updateSlider
);

export default routes;
