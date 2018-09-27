'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _product = require('./product.validation');

var _product2 = _interopRequireDefault(_product);

var _product3 = require('./product.controller');

var productController = _interopRequireWildcard(_product3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = new _express.Router();

Routes.post('/addproduct', (0, _expressValidation2.default)(_product2.default), productController.addProduct);
Routes.get('/products', productController.getProduct);
Routes.patch('/updateproduct/:id', (0, _expressValidation2.default)(_product2.default), productController.updateProduct);
Routes.delete('/removeproduct/:id', productController.removeRecord);
Routes.get('/productsbyvendor/:id', productController.getProductsByVendor);

exports.default = Routes;