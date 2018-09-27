'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Post title is required']
  },
  text: {
    type: String,
    required: [true, 'Post text is required'],
    minlength: [15, 'Minimum 15 characters']
  },
  topic: {
    type: String,
    required: [true, 'Post topic is required'],
    trim: true
  },
  uid: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }
}, { timestamps: true });

PostSchema.methods = {
  toJSON: function toJSON() {
    return {
      title: this.title,
      text: this.text,
      topic: this.topic,
      uid: this.uid
    };
  }
};

PostSchema.statics = {
  addpost: function addpost(args, uid) {
    return this.create(_extends({}, args, {
      uid: uid
    }));
  },
  getData: function getData() {
    return this.find({});
  }
};

exports.default = _mongoose2.default.model('Posts', PostSchema);