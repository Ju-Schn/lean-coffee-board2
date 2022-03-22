import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minLength: 3,
    },
    author: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '##FF69B4',
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model('Entry', schema);
