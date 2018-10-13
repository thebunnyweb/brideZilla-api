import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const EnquirySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: '{VALUE} is not a valid email'
      }
    },
    message: {
      type: String,
      required: [true, 'Message is required']
    },
    sku_code: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model('Enquiries', EnquirySchema);
