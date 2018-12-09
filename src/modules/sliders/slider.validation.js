import Joi from 'joi';

export default {
  SliderValidation: {
    noofimages: Joi.number().required(),
    foldername: Joi.string().required(),
    slidertitle: Joi.string(),
    slidersubtitle: Joi.string(),
    slidertitleIndex: Joi.array(),
    slidersubtitleIndex: Joi.array(),
    vendorid: Joi.string().required()
  }
};
