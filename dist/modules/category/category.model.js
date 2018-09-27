'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategorySchema = new _mongoose.Schema({
  category_name: {
    type: String,
    required: [true, 'Category name is required.']
  }
}, {
  timestamps: true
});

CategorySchema.plugin(_mongooseUniqueValidator2.default, {
  message: '{VALUE} alreay exists'
});

exports.default = _mongoose2.default.model('Category', CategorySchema);