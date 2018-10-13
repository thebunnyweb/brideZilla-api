import Joi from 'joi';

export default {
  EnquiryValidation: {
    name: Joi.required(),
    email: Joi.required().email(),
    message: Joi.required()
  }
};
