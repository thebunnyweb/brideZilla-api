import Joi from 'joi';

export default {
  EnquiryValidation: {
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    message: Joi.string().required()
  }
};
