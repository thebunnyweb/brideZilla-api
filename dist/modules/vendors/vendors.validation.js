'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  VendorValidation: {
    vendor_profile: _joi2.default.string().required(),
    vendor_name: _joi2.default.string().required().min(3),
    vendor_speciality: _joi2.default.string().min(3),
    vendor_email: _joi2.default.string().required().email(),
    vendor_website: _joi2.default.string()
  }
};