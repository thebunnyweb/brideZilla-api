'use strict';

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./config/db');

var _db2 = _interopRequireDefault(_db);

var _constants = require('./config/constants');

var _constants2 = _interopRequireDefault(_constants);

var _middleware = require('./config/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _modules = require('./modules');

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ApiDoc from 'express-mongoose-docs';
// import mongoose from 'mongoose';
var app = (0, _express2.default)(); /*eslint-disable-line*/
/*eslint-disable-line*/

var PORT = _constants2.default.port;

(0, _middleware2.default)(app);
(0, _modules2.default)(app);
// ApiDoc(app, mongoose);

app.listen(PORT, function (err) {
  if (!err) console.log('App running on port ' + PORT);
});