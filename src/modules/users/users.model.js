import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import uniqueValidator from 'mongoose-unique-validator';
import jwt from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import constants from '../../config/constants';

const UserSchema = new Schema(
  {
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
        validator(email) {
          return validator.isEmail(email);
        },
        message: `{VALUE} is not a valid email`
      }
    },
    phone: {
      type: String,
      trim: true,
      minlength: [10, 'Minimum length required for mobile number is 10'],
      maxlength: [10, 'Invalid mobile number'],
      validate: {
        validator(phone) {
          return validator.isMobilePhone(phone);
        },
        message: '{VALUE} invalid email'
      }
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre('save', function(next) {
  this.password = this.createHash();
  return next();
});

UserSchema.methods = {
  createHash() {
    return hashSync(this.password);
  },
  createToken() {
    return jwt.sign({ id: this._id }, constants.JWT_SECRET);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  toAuthJSON() {
    return {
      id: this._id,
      name: `${this.firstname} ${this.lastname}`,
      email: this.email,
      phone: this.phone,
      token: `JWT ${this.createToken()}`
    };
  },
  toJSON() {
    return {
      id: this._id,
      name: `${this.firstname} ${this.lastname}`,
      email: this.email,
      phone: this.phone
    };
  }
};

UserSchema.statics = {
  getData(uid) {
    if (uid === '') {
      return this.find({});
    }
    return this.find({ _id: uid });
  }
};

UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} already exist.'
});

export default mongoose.model('Users', UserSchema);
