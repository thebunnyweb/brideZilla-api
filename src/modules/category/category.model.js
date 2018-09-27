import mongoose, { Schema } from 'mongoose';
import UniqueValidator from 'mongoose-unique-validator';

const CategorySchema = new Schema(
  {
    category_name: {
      type: String,
      required: [true, 'Category name is required.']
    }
  },
  {
    timestamps: true
  }
);

CategorySchema.plugin(UniqueValidator, {
  message: '{VALUE} alreay exists'
});

export default mongoose.model('Category', CategorySchema);
