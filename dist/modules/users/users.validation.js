'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  userPostValidation: {
    firstname: _joi2.default.string().required(),
    lastname: _joi2.default.string().required(),
    password: _joi2.default.string().required(),
    email: _joi2.default.string().email().required(),
    phone: _joi2.default.number().required().min(10).max(10)
  }
};