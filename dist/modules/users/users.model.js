'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator2 = require('validator');

var _validator3 = _interopRequireDefault(_validator2);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptNodejs = require('bcrypt-nodejs');

var _constants = require('../../config/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  password: {
    type: String,
    minlength: [6, 'Minimum password size requird is 6 characters'],
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    required: [true, 'Email name is required'],
    unique: true,
    validate: {
      validator: function validator(email) {
        return _validator3.default.isEmail(email);
      },

      message: '{VALUE} is not a valid email'
    }
  },
  phone: {
    type: String,
    trim: true,
    minlength: [10, 'Minimum length required for mobile number is 10'],
    maxlength: [10, 'Invalid mobile number'],
    validate: {
      validator: function validator(phone) {
        return _validator3.default.isMobilePhone(phone);
      },

      message: '{VALUE} invalid email'
    }
  }
}, {
  timestamps: true
});

UserSchema.pre('save', function (next) {
  this.password = this.createHash();
  return next();
});

UserSchema.methods = {
  createHash: function createHash() {
    return (0, _bcryptNodejs.hashSync)(this.password);
  },
  createToken: function createToken() {
    return _jsonwebtoken2.default.sign({ id: this._id }, _constants2.default.JWT_SECRET);
  },
  authenticateUser: function authenticateUser(password) {
    return (0, _bcryptNodejs.compareSync)(password, this.password);
  },
  toAuthJSON: function toAuthJSON() {
    return {
      id: this._id,
      name: this.firstname + ' ' + this.lastname,
      email: this.email,
      phone: this.phone,
      token: 'JWT ' + this.createToken()
    };
  },
  toJSON: function toJSON() {
    return {
      id: this._id,
      name: this.firstname + ' ' + this.lastname,
      email: this.email,
      phone: this.phone
    };
  }
};

UserSchema.statics = {
  getData: function getData(uid) {
    if (uid === '') {
      return this.find({});
    }
    return this.find({ _id: uid });
  }
};

UserSchema.plugin(_mongooseUniqueValidator2.default, {
  message: '{VALUE} already exist.'
});

exports.default = _mongoose2.default.model('Users', UserSchema);