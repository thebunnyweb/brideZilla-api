import Joi from 'joi';

export default {
  CategoryValidation: {
    category_name: Joi.string().required()
  }
};
