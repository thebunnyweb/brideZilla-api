'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductById = exports.getProductsByVendor = exports.removeRecord = exports.updateProduct = exports.getProduct = exports.addProduct = undefined;

var addProduct = exports.addProduct = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var productData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _product2.default.create(req.body);

          case 3:
            productData = _context.sent;

            res.status(_httpStatus2.default.CREATED).json(productData);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            res.status(_httpStatus2.default.BAD_GATEWAY).json(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function addProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getProduct = exports.getProduct = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var productData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _product2.default.find({}).populate('vendor_id', ['_id', 'vendor_name', 'vendor_email']);

          case 3:
            productData = _context2.sent;

            res.status(_httpStatus2.default.OK).json(productData);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            res.status(_httpStatus2.default.BAD_GATEWAY).json(_context2.t0);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function getProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var updateProduct = exports.updateProduct = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _product2.default.findOneAndUpdate({ _id: _mongoose2.default.Types.ObjectId(req.params.id) }, req.body, {
              upsert: true,
              new: true
            });

          case 3:
            product = _context3.sent;

            res.status(_httpStatus2.default.OK).json(product);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            res.status(_httpStatus2.default.BAD_GATEWAY).json(_context3.t0);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 7]]);
  }));

  return function updateProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var removeRecord = exports.removeRecord = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _product2.default.findByIdAndRemove(req.params.id);

          case 3:
            res.status(_httpStatus2.default.OK).json({ id: req.params.id, message: 'Removed from collection', flag: 'Success' });
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4['catch'](0);

            res.status(_httpStatus2.default.BAD_GATEWAY).json(_context4.t0);

          case 9:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 6]]);
  }));

  return function removeRecord(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var getProductsByVendor = exports.getProductsByVendor = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var vendor_id, products;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            vendor_id = req.params.id || '';
            _context5.next = 4;
            return _product2.default.getProductByVendorData(vendor_id);

          case 4:
            products = _context5.sent;

            res.status(_httpStatus2.default.OK).json(products);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](0);

            res.status(_httpStatus2.default.BAD_GATEWAY).json(_context5.t0);

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 8]]);
  }));

  return function getProductsByVendor(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var getProductById = exports.getProductById = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var productdata;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _product2.default.findById(req.params.id);

          case 3:
            productdata = _context6.sent;

            res.status(_httpStatus2.default.OK).json(productdata);
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](0);

            res.status(_httpStatus2.default.BAD_GATEWAY).json(_context6.t0);

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 7]]);
  }));

  return function getProductById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _product = require('./product.model');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }