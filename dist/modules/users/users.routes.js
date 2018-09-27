'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _users = require('./users.controller');

var UserController = _interopRequireWildcard(_users);

var _users2 = require('./users.validation');

var _users3 = _interopRequireDefault(_users2);

var _auth = require('../../services/auth');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _express.Router();

routes.post('/adduser', (0, _expressValidation2.default)(_users3.default.userPostValidation), UserController.addUser);
routes.get('/getusers', UserController.getUsers);
routes.post('/login', _auth.AuthLogin, UserController.login);

exports.default = routes;