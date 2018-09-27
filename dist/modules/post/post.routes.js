'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _post = require('./post.controller');

var PostController = _interopRequireWildcard(_post);

var _auth = require('../../services/auth');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = new _express.Router();

routes.post('/addpost', _auth.JwtAuth, PostController.addpost);
routes.get('/allpost', PostController.getAllPosts);

exports.default = routes;