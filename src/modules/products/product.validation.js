import Joi from 'joi';

export default {
  ProductValidation: {
    product_image: Joi.string().required(),
    garment_name: Joi.string().required(),
    vendor_id: Joi.string().required(),
    vendor_sku_code: Joi.string().required(),
    description: Joi.string()
      .required()
      .min(100),
    style: Joi.string(),
    retail_price: Joi.string().required(),
    delivery_time: Joi.string(),
    material_composition: Joi.string(),
    lining_material: Joi.string(),
    woven: Joi.boolean(),
    knitted: Joi.boolean(),
    closure_used: Joi.string(),
    neck_type: Joi.string(),
    special_finishing: Joi.string(),
    care_instruction: Joi.string(),
    special_packaging: Joi.string()
  }
};
