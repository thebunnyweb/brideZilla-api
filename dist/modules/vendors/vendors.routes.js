'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _vendors = require('./vendors.validation');

var _vendors2 = _interopRequireDefault(_vendors);

var _vendors3 = require('./vendors.controller');

var VendorController = _interopRequireWildcard(_vendors3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _express.Router();

routes.post('/addvendor', (0, _expressValidation2.default)(_vendors2.default.VendorValidation), VendorController.addVendor);
routes.get('/vendors', VendorController.getVendors);
routes.patch('/updatevendor/:id', (0, _expressValidation2.default)(_vendors2.default.VendorValidation), VendorController.updateVendor);
routes.delete('/removevendor/:id', VendorController.deleteVendor);

exports.default = routes;