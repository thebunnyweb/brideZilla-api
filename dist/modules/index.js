'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('./users/users.routes');

var _users2 = _interopRequireDefault(_users);

var _post = require('./post/post.routes');

var _post2 = _interopRequireDefault(_post);

var _products = require('./products/products.routes');

var _products2 = _interopRequireDefault(_products);

var _vendors = require('./vendors/vendors.routes');

var _vendors2 = _interopRequireDefault(_vendors);

var _category = require('./category/category.routes');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.use('/api', _users2.default);
  app.use('/api', _post2.default);
  app.use('/api', _products2.default);
  app.use('/api', _vendors2.default);
  app.use('/api', _category2.default);
};