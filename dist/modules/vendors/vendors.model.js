'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator2 = require('validator');

var _validator3 = _interopRequireDefault(_validator2);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VendorSchema = new _mongoose.Schema({
  vendor_name: {
    type: String,
    required: [true, 'Vendor name is required'],
    minlength: [3, 'Atleat 3 characters required'],
    trim: true
  },
  vendor_speciality: {
    type: String,
    required: [true, 'Vendor name is required'],
    minlength: [3, 'Atleat 3 characters required'],
    trim: true
  },
  vendor_email: {
    type: String,
    required: [true, 'Vendor name is required'],
    validate: {
      validator: function validator(vendor_email) {
        return _validator3.default.isEmail(vendor_email);
      },

      message: '{VALUE} is not a valid email'
    },
    unique: true
  },
  vendor_website: {
    type: String,
    trim: true
  },
  vendor_active_state: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

VendorSchema.plugin(_mongooseUniqueValidator2.default, {
  message: '{VALUE} alreay exists'
});

exports.default = _mongoose2.default.model('Vendors', VendorSchema);