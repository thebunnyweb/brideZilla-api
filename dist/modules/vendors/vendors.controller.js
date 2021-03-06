'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVendor = exports.updateVendor = exports.getVendors = exports.addVendor = undefined;

var addVendor = exports.addVendor = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var vendor;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _vendors2.default.create(req.body);

          case 3:
            vendor = _context.sent;

            res.status(_httpStatus2.default.CREATED).json(vendor);
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

  return function addVendor(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getVendors = exports.getVendors = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var vendors;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _vendors2.default.find({});

          case 3:
            vendors = _context2.sent;

            res.status(_httpStatus2.default.OK).json(vendors);
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

  return function getVendors(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var updateVendor = exports.updateVendor = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var vendor;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _vendors2.default.findOneAndUpdate({ _id: _mongoose2.default.Types.ObjectId(req.params.id) }, req.body, {
              upsert: true,
              new: true
            });

          case 3:
            vendor = _context3.sent;

            res.status(_httpStatus2.default.OK).json(vendor);
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

  return function updateVendor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteVendor = exports.deleteVendor = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _vendors2.default.findByIdAndRemove(req.params.id);

          case 3:
            res.status(_httpStatus2.default.CREATED).json({ id: req.params.id, flag: 'success' });
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

  return function deleteVendor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _vendors = require('./vendors.model');

var _vendors2 = _interopRequireDefault(_vendors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }