'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JwtAuth = exports.AuthLogin = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _passportJwt = require('passport-jwt');

var _constants = require('../config/constants');

var _constants2 = _interopRequireDefault(_constants);

var _users = require('../modules/users/users.model');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var LocalOPts = {
  usernameField: 'email'
};

var localStategy = new _passportLocal2.default(LocalOPts, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password, done) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _users2.default.findOne({ email: email });

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', done(null, false));

          case 6:
            if (user.authenticateUser(password)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt('return', done(null, false));

          case 8:
            return _context.abrupt('return', done(null, user));

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', done(_context.t0, false));

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 11]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

var jwtStrategyOpts = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: _constants2.default.JWT_SECRET
};

var jwtStrategy = new _passportJwt.Strategy(jwtStrategyOpts, function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(payload, done) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _users2.default.findOne({ _id: '5ba244289e8a7d521870c11e' });

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt('return', done(null, false));

          case 6:
            return _context2.abrupt('return', done(null, user));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);
            return _context2.abrupt('return', done(_context2.t0, false));

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 9]]);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());

_passport2.default.use(localStategy);
_passport2.default.use(jwtStrategy);

var AuthLogin = exports.AuthLogin = _passport2.default.authenticate('local', { session: false });
var JwtAuth = exports.JwtAuth = _passport2.default.authenticate('jwt', { session: false });