import mongoose, { Schema } from 'mongoose';

const sliderSchema = new Schema(
  {
    noofimages: {
      type: Number,
      require: [true, 'No of images is required']
    },
    foldername: {
      type: String,
      required: [true, 'Name of folder is required']
    },
    slidertitleIndex: {
      type: Array
    },
    slidertitle: {
      type: Array
    },
    slidersubtitleIndex: {
      type: Array
    },
    slidersubtitle: {
      type: Array
    },
    vendorid: {
      type: Schema.Types.ObjectId,
      ref: 'Vendors',
      required: [true, 'Vendor id is required']
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Slider', sliderSchema);
