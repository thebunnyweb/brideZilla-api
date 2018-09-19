import Joi from 'joi';

export default {
  userPostValidation: {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    phone: Joi.number()
      .required()
      .min(10)
      .max(10)
  }
};
