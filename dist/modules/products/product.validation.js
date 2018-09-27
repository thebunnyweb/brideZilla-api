'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ProductValidation: {
    product_image: _joi2.default.string().required(),
    garment_name: _joi2.default.string().required(),
    vendor_id: _joi2.default.string().required(),
    vendor_sku_code: _joi2.default.string().required(),
    description: _joi2.default.string().required().min(100),
    style: _joi2.default.string(),
    retail_price: _joi2.default.string().required(),
    delivery_time: _joi2.default.string(),
    material_composition: _joi2.default.string(),
    lining_material: _joi2.default.string(),
    woven: _joi2.default.boolean(),
    knitted: _joi2.default.boolean(),
    closure_used: _joi2.default.string(),
    neck_type: _joi2.default.string(),
    special_finishing: _joi2.default.string(),
    care_instruction: _joi2.default.string(),
    special_packaging: _joi2.default.string()
  }
};