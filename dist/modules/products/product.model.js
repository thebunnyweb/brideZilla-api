'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductSchema = new _mongoose.Schema({
  product_image: {
    type: String,
    required: [true, 'Product image is required']
  },
  vendor_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Vendors',
    required: [true, 'Vendor Id is required']
  },
  garment_name: {
    type: String,
    required: [true, 'Garment name is required'],
    minlength: 4
  },
  vendor_sku_code: {
    type: String,
    required: [true, 'Sku code is required'],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    minlength: 100
  },
  style: {
    type: String,
    trim: true
  },
  retail_price: {
    type: String,
    trim: true,
    required: [true, 'Retail price is required']
  },
  delivery_time: {
    type: String,
    trim: true
  },
  material_composition: {
    type: String,
    trim: true
  },
  lining_material: {
    type: String,
    trim: true
  },
  woven: {
    type: Boolean
  },
  knitted: {
    type: Boolean
  },
  closure_used: {
    type: String,
    trim: true
  },
  neck_type: {
    type: String,
    trim: true
  },
  special_finishing: {
    type: String,
    trim: true
  },
  care_instruction: {
    type: String,
    trim: true
  },
  special_packaging: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

ProductSchema.methods = {
  toJSON: function toJSON() {
    return {
      id: this._id,
      product_image: this.product_image,
      vendor_id: this.vendor_id,
      garment_name: this.garment_name,
      vendor_sku_code: this.vendor_sku_code,
      description: this.description,
      style: this.style,
      retail_price: this.retail_price,
      delivery_time: this.delivery_time,
      material_composition: this.material_composition,
      lining_material: this.lining_material,
      woven: this.woven,
      knitted: this.knitted,
      closure_used: this.closure_used,
      neck_type: this.neck_type,
      special_finishing: this.special_finishing,
      care_instruction: this.care_instruction,
      special_packaging: this.special_packaging
    };
  }
};

ProductSchema.statics = {
  getProductByVendorData: function getProductByVendorData(vendor_id) {
    if (vendor_id !== '') {
      return this.find({ vendor_id: _mongoose2.default.Types.ObjectId(vendor_id) }).populate('vendor_id', ['_id', 'vendor_name', 'vendor_email']);
    }
    return this.find({}).populate('vendor_id', ['_id', 'vendor_name', 'vendor_email']);
  }
};

ProductSchema.plugin(_mongooseUniqueValidator2.default, {
  message: '{VALUE} already exists'
});

exports.default = _mongoose2.default.model('Products', ProductSchema);