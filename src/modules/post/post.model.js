import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
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
  }
});

export default mongoose.model('Posts', PostSchema);
