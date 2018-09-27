'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPosts = exports.addpost = undefined;

/*eslint-disable-line*/

var addpost = exports.addpost = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _post2.default.addpost(req.body, req.user.id);

          case 3:
            post = _context.sent;

            res.status(_httpStatus2.default.CREATED).json(post);
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

  return function addpost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getAllPosts = exports.getAllPosts = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var postsdata;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _post2.default.getData().populate('uid', ['firstname', 'lastname', 'phone']);

          case 3:
            postsdata = _context2.sent;

            res.status(_httpStatus2.default.OK).json(postsdata);
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

  return function getAllPosts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _post = require('./post.model');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }