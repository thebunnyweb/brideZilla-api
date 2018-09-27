'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var mongoCredentials = {
  MONGO_USER: 'thebunny',
  MONGO_PASSWORD: 'Bunny1526'
};

var devConfig = {
  MONGO_URL: 'mongodb://' + mongoCredentials.MONGO_USER + ':' + mongoCredentials.MONGO_PASSWORD + '@ds159812.mlab.com:59812/bridezilla',
  JWT_SECRET: 'ZenApp'
};

var prodConfig = {
  MONGO_URL: 'mongodb://' + mongoCredentials.MONGO_USER + ':' + mongoCredentials.MONGO_PASSWORD + '@ds159812.mlab.com:59812/bridezilla',
  JWT_SECRET: 'ZenApp'
};

var defaultConfig = {
  port: process.env.PORT || 3200
};

function getEnvironmentConfig(env) {
  switch (env) {
    case 'developement':
      return devConfig;
    case 'production':
      return prodConfig;
    default:
      return defaultConfig;
  }
}

exports.default = _extends({}, defaultConfig, getEnvironmentConfig(process.env.NODE_ENV));