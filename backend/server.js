import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.routes.js';
import projectRoutes from './routes/projects.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected');
    } else {
      console.log('MongoDB URI not provided, running without database');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

connectDB();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT} and binding to 0.0.0.0`);
});
