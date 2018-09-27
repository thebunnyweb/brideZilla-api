'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _category = require('./category.controller');

var CategoryController = _interopRequireWildcard(_category);

var _category2 = require('./category.validation');

var _category3 = _interopRequireDefault(_category2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.post('/addcategory', (0, _expressValidation2.default)(_category3.default.CategoryValidation), CategoryController.addCategory);

router.get('/category', CategoryController.getCategory);
router.patch('/updatecategory/:id', (0, _expressValidation2.default)(_category3.default.CategoryValidation), CategoryController.updateCategory);
router.delete('/removecategory/:id', CategoryController.deleteCategory);

exports.default = router;