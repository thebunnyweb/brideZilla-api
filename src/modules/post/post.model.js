import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  },
  { timestamps: true }
);

PostSchema.methods = {
  toJSON() {
    return {
      title: this.title,
      text: this.text,
      topic: this.topic,
      uid: this.uid
    };
  }
};

PostSchema.statics = {
  addpost(args, uid) {
    return this.create({
      ...args,
      uid
    });
  },
  getData() {
    return this.find({});
  }
};

export default mongoose.model('Posts', PostSchema);
