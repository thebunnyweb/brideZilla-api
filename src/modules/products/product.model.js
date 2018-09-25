import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProductSchema = new Schema(
  {
    garment_name: {
      type: String,
      required: [true, 'Garment name is required'],
      minlength: 4
    },
    vendor_sku_code: {
      type: String,
      required: [true, 'Sku code is required'],
      trim: true,
      unique: true
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: 100
    },
    style: {
      type: String,
      trim: true
    },
    retail_price: {
      type: String,
      trim: true,
      required: [true, 'Retail price is required']
    },
    delivery_time: {
      type: String,
      trim: true
    },
    material_composition: {
      type: String,
      trim: true
    },
    lining_material: {
      type: String,
      trim: true
    },
    woven: {
      type: Boolean
    },
    knitted: {
      type: Boolean
    },
    closure_used: {
      type: String,
      trim: true
    },
    neck_type: {
      type: String,
      trim: true
    },
    special_finishing: {
      type: String,
      trim: true
    },
    care_instruction: {
      type: String,
      trim: true
    },
    special_packaging: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

ProductSchema.plugin(uniqueValidator, {
  message: '{VALUE} already exists'
});

export default mongoose.model('Products', ProductSchema);
