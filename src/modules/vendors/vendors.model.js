import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import uniqueValidator from 'mongoose-unique-validator';

const VendorSchema = new Schema(
  {
    vendor_name: {
      type: String,
      required: [true, 'Vendor name is required'],
      minlength: [3, 'Atleat 3 characters required'],
      trim: true
    },
    vendor_speciality: {
      type: String,
      required: [true, 'Vendor name is required'],
      minlength: [3, 'Atleat 3 characters required'],
      trim: true
    },
    vendor_email: {
      type: String,
      required: [true, 'Vendor name is required'],
      validate: {
        validator(vendor_email) {
          return validator.isEmail(vendor_email);
        },
        message: '{VALUE} is not a valid email'
      },
      unique: true
    },
    vendor_website: {
      type: String,
      trim: true
    },
    vendor_active_state: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

VendorSchema.plugin(uniqueValidator, {
  message: '{VALUE} alreay exists'
});

export default mongoose.model('Vendors', VendorSchema);
