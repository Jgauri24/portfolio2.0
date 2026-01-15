import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [String],
  category: String,
  github: String,
  live: String,
  imageColor: String,
  featured: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
