import Joi from 'joi';

export default {
  VendorValidation: {
    vendor_profile: Joi.string().required(),
    vendor_name: Joi.string()
      .required()
      .min(3),
    vendor_speciality: Joi.string().min(3),
    vendor_email: Joi.string()
      .required()
      .email(),
    vendor_website: Joi.string()
  }
};
