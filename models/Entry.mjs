import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    text: mongoose.SchemaTypes.String,
    author: mongoose.SchemaTypes.String,
    color: mongoose.SchemaTypes.String,
    created: mongoose.SchemaTypes.Date,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Entry', schema);
